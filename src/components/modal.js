import * as React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { editStyles } from '../styles/main';

export default ({navigation}) =>{
    const [hide, setHide] = React.useState(false)
    const [qoute, setQoute] = React.useState({})
    React.useEffect(()=>{
      fetch("https://zenquotes.io/api/today").then(res=> res.json()).then(res => setQoute((res.pop())))
    }, [])
    return <Modal
          animationType="fade"
          transparent={true}
          visible={!hide}
          onDismiss={()=>navigation.goBack()}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >                     
          <TouchableOpacity onPress={()=>setHide(true)} activeOpacity={1} style={{ 
            flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.5)'
            }}>
            <View style={{ backgroundColor:'rgba(255,255,255,1)', borderWidth:1, borderRadius: 2, padding:10, marginHorizontal:10}}>
              <Text style={editStyles.title}>{qoute["q"]}{"\n\n"}{qoute["a"]}</Text>            
            </View> 
          </TouchableOpacity>        
        </Modal>
}