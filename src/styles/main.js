import { StyleSheet } from "react-native"

export const editStyles = StyleSheet.create({
    title: {
      marginTop: 10,
      marginBottom: 5,
      color:'#333',
      fontSize:14
    },
    input: {
      borderWidth:1,
      borderColor:'gray',
      height: 30,
      paddingHorizontal:10,    
    },
    buttonCont1: {    
      marginTop:20,
      
    },
    buttonCont2: {    
      marginTop:20,
      flexGrow:1
    },
    button: {
      backgroundColor:'#000',
      color:"#fff",
      textAlign:'center',    
      paddingVertical:20,
      fontSize:16,
    },
    buttonDelete: {
      backgroundColor:'red',
      color:"#fff",
      textAlign:'center',
      paddingVertical:20,
      fontSize:16
    }
  })