import { StyleSheet } from "react-native"
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default StyleSheet.create({
    bgPokedex: {
        backgroundColor: '#D01E36'
    },
    flex: {
        flex: 1
    },
    wrap: {
        flexWrap: 'wrap'
    },
    textCenter: {
        textAlign:'center'
    },
    pad: {
        padding:10
    },
    viewHeader: {
        height:(windowHeight * .1), 
        width:'100%', 
        flexDirection:'row', 
        borderBottomWidth:3, 
        padding:5
    },
    btnTop: {
        width:(windowHeight * .08 ), 
        height:(windowHeight * .08 ), 
        borderRadius: 80, 
        backgroundColor:"#22ACFF", 
        borderWidth:3
    },
    content: {
        height:(windowHeight * .9), 
        width: windowWidth, 
        padding:(windowWidth*.05)
    },
    infoText: {
        textAlign:'center', 
        color:'#56C4C1'
    },
    statText: { 
        color:'#225B68'
    },
    viewScreen: {
        flex:1, 
        backgroundColor:'#56C4C1', 
        borderWidth:10, 
        borderColor:'#B0B0B0'
    },
    btnPokeList: {
        flex:1, 
        padding:5, 
        borderBottomWidth:2, 
        borderColor:'#225B68',
        alignItems:'center'
    },
    pokeName: {
        fontSize:22, 
        color:'#225B68'
    },
    secondText: {
        fontSize:18
    },
    rowView: {
        flexDirection:'row', 
        padding:5
    },
    pokeImage: { 
        height: 250, resizeMode:'contain' 
    },
    gender: {
        flexDirection:'row', 
        justifyContent:'center'
    },
    infoPokeView: {
        flexWrap:'wrap', 
        flexDirection:'row', 
        backgroundColor:'#225B68'
    },
    statView:{
        flexDirection:'column', 
        flex:1, 
        marginTop:10, 
        paddingHorizontal:5, 
        width:65
    },
    stat: {
        height:10,
        marginBottom:1,
        width:'100%'
    },
    typePokeView: {
        flexDirection:'column', 
        width:'50%',
    },
    btnBack: {
        backgroundColor:'#22ACFF',
        width:75,
        borderBottomWidth:2,
        borderRightWidth:2,
        borderColor:'#333333',
        position: 'absolute',
        zIndex:2,
        bottom:0,
        right: 0
    },
    btnBackText: {
        fontSize:15
    },
    modalView: {
        backgroundColor: '#56C4C1',
        flex:1,
        marginTop:(( windowHeight * .1) + (windowWidth*.05) ),
        marginBottom:(windowWidth*.05),
        marginHorizontal:(windowWidth*.05)
    },
    navigation: {
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'flex-end'
    }
})