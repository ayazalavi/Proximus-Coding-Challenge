import { StyleSheet } from "react-native"

export const mainStyles = StyleSheet.create({
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
    },
    listItemCont: {
        flexDirection:'row', 
        paddingHorizontal: 10, 
        paddingVertical:10
    },
    listItemText: {
        flex:1, 
        justifyContent:'center'
    },
    separator: {
        height:1, 
        backgroundColor:"gray"
    },
    editCont: { 
        flex: 1,
        alignItems: 'stretch', 
        justifyContent: 'flex-start', 
        padding:10 
    },
    modalCont: { 
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    modalInnerCont: { 
        backgroundColor:'rgba(255,255,255,1)', 
        borderWidth:1, 
        borderRadius: 2, 
        padding:10, 
        marginHorizontal:10
    }
  })