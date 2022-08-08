import * as React from 'react';
import { useSelector } from 'react-redux'
import { View, Text, FlatList, TouchableHighlight, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { editStyles } from '../styles/main';

export default ({ navigation }) => {
    let devices = useSelector(state => state.devices);
    React.useLayoutEffect(()=>{
        navigation.setOptions({    
            title:'Devices List',    
            headerRight: () => (
             <Button
               onPress={() => navigation.navigate("Edit")}
               title="Add"
               color="#000"                          
             />
           )           
        })
    }, []);
    
    const renderitem = ({item}) => {
      return <View style={{flexDirection:'row', paddingHorizontal: 10, paddingVertical:10}}>
                <TouchableHighlight underlayColor={'#ccc'} style={{flex:1, justifyContent:'center'}} onPress={()=>navigation.navigate("Edit", {device: item})}>
                    <Text style={editStyles.title}>Model: {item.model}{"\n"}OS: {item.os}{"\n"}Owner: {item.owner}{"\n"}Notes: {item.notes}</Text>        
                </TouchableHighlight>
                <QRCode
                    onPress={()=>navigation.navigate("Edit", {device: item})}
                    value={JSON.stringify(item)}
                />
            </View>;
    }
    return (
      <FlatList
        data={devices}
        renderItem={renderitem}
        ItemSeparatorComponent={()=><View style={{height:1, backgroundColor:"gray"}} />}            
      />
    );
  }