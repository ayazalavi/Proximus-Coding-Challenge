import * as React from 'react';
import { useSelector } from 'react-redux'
import { View, Text, FlatList, TouchableHighlight, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { mainStyles } from '../styles/main';
import { importHandler } from '../data/file';


export default ({ navigation }) => {
    let devices = useSelector(state => state.devices);
    const [file, setFile] = React.useState(false);

    const { checkFile, exportDevices, importDevices } = React.useCallback(importHandler(setFile, devices), [file, devices]);

    React.useLayoutEffect(()=>{
        checkFile();
        navigation.setOptions({    
            title:'Devices List',    
            headerRight: () => (
             <><Button
               onPress={() => navigation.navigate("Edit")}
               title="Add"
               color="#000"                          
             />
            <Button
               onPress={() => exportDevices(JSON.stringify(devices))}
               title="Export"
               color="#000"  
               disabled={!devices.length}                        
             />
             <Button
               onPress={() => importDevices()}
               title="Import"
               color="#000"    
               disabled={!file}                                            
             />
             </>
           )           
        })
    }, [devices, file]);
    
    const renderitem = ({item}) => {
      return <View style={mainStyles.listItemCont}>
                <TouchableHighlight underlayColor={'#ccc'} style={mainStyles.listItemText} onPress={()=>navigation.navigate("Edit", {device: item})}>
                    <Text style={mainStyles.title}>
                        Model: {item.model}{"\n"}
                        OS: {item.os}{"\n"}
                        Owner: {item.owner}{"\n"}
                        Notes: {item.notes}
                    </Text>        
                </TouchableHighlight>
                <QRCode
                    onPress={()=>navigation.navigate("Edit", {device: item})}
                    value={JSON.stringify(item)} />
            </View>;
    }
    return (
      <FlatList
        data={devices}
        renderItem={renderitem}
        ItemSeparatorComponent={()=><View style={mainStyles.separator} />}            
      />
    );

}