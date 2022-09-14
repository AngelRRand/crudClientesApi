import { StyleSheet } from 'react-native'


const globalStyles = StyleSheet.create({
    contenedor:{
        flex:1,
        marginTop:20,
        marginHorizontal:'2.5%'
    },
    titulo: {
        textAlign:'center',
        marginTop:20,
        marginBottom:30
    },
    fab:{
        position: 'absolute',
        margin: 20,
        bottom: 0,
        right: 20,
    },
    text:{
        marginBottom:20,
        fontSize:18
    }
});


export default globalStyles