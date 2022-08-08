import * as React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { useDispatch } from 'react-redux'
import { editStyles } from '../styles/main';
import { add, edit, deleteDevice } from '../data/slice';
import Modal from '../components/modal';

export default ({navigation, route})=>{
    const { device } = route.params;
    const dispatch = useDispatch()
    const [deviceData, setDeviceData] = React.useState({model: device?.model, os: device?.os, owner: device?.owner, notes: device?.notes})
    const [showDelete, setShowDelete] = React.useState(false)
    React.useLayoutEffect(() => {
        navigation.setOptions({ title: device ? "Edit Device" : 'Add Device' })
    }, [navigation]);
    
    return (
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start', padding:10 }}>
        <Text style={editStyles.title} >Model Number</Text>
        <TextInput style={editStyles.input} value={deviceData.model} onChangeText={(text)=>setDeviceData({...deviceData, model: text})} placeholder='Enter Device Model Number' placeholderTextColor={"gray"} />
        <Text style={editStyles.title}>Operating System</Text>
        <TextInput style={editStyles.input} value={deviceData.os}  onChangeText={(text)=>setDeviceData({...deviceData, os: text})}  placeholder='Enter OS name and version' placeholderTextColor={"gray"} />
        <Text style={editStyles.title}>Current Owner</Text>
        <TextInput style={editStyles.input} value={deviceData.owner}  onChangeText={(text)=>setDeviceData({...deviceData, owner: text})}  placeholder='Enter current owner name' placeholderTextColor={"gray"} />
        <Text style={editStyles.title}>Notes</Text>
        <TextInput style={editStyles.input} value={deviceData.notes}  onChangeText={(text)=>setDeviceData({...deviceData, notes: text})}  placeholder='Enter notes' placeholderTextColor={"gray"} />
        {device ? 
            <View style={{ flexDirection:'row' }}>
                <TouchableHighlight style={editStyles.buttonCont2} onPress={()=>{
                setShowDelete(true);
                dispatch(deleteDevice({id: device.id}));
                //navigation.goBack()
                }}>
                <Text style={editStyles.buttonDelete}>Delete Device</Text>
                </TouchableHighlight>
                <TouchableHighlight style={editStyles.buttonCont2} onPress={()=>{
                dispatch(edit({...deviceData, id: device.id}));
                navigation.goBack()
                }}>
                <Text style={editStyles.button}>Save Changes</Text>
                </TouchableHighlight>
            </View> : 
            <TouchableHighlight onPress={()=>{
            dispatch(add(deviceData));
            navigation.goBack()
            }} style={editStyles.buttonCont1}>
            <Text style={editStyles.button}>Add Device</Text>
            </TouchableHighlight>}
        {showDelete && <Modal navigation={navigation} />}
        </View>
    );    

}