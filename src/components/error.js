import React from 'react'
import { View, Image, Text } from 'react-native'

function ErrorComponent() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:10}}>
            <Image style={{height:'20%', resizeMode:'contain'}} source={require('../assets/error.png')}/>
            <Text style={{textAlign:'center'}}>Hubo un error al cargar, por favor intente más tarde.</Text>
        </View>
    )
}

export default ErrorComponent
