import * as React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { mainStyles } from '../styles/main';

export default ({navigation}) =>{
    const [hide, setHide] = React.useState(false)
    const [qoute, setQoute] = React.useState({})
    React.useEffect(()=>{
      fetch("https://type.fit/api/quotes").then(res=> res.json()).then(res => setQoute((res.pop())))
    }, [])
    return <Modal
                animationType="fade"
                transparent={true}
                visible={!hide}
                onDismiss={()=>navigation.goBack()}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}>                     
          <TouchableOpacity onPress={()=>setHide(true)} activeOpacity={1} style={mainStyles.modalCont}>
            <View style={mainStyles.modalInnerCont}>
              <Text style={mainStyles.title}>{qoute["text"]}{"\n\n"}{qoute["author"]}</Text>            
            </View> 
          </TouchableOpacity>        
        </Modal>
}