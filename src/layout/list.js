import * as React from 'react';
import { useSelector } from 'react-redux'
import { View, Text, FlatList, TouchableHighlight, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { mainStyles } from '../styles/main';

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