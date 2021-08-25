import React from 'react';
import { View, Image, Text } from 'react-native';

function ErrorComponent() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image style={{height:'20%', resizeMode:'contain'}} source={require('../assets/error.png')}/>
            <Text style={{textAlign:'center'}}>Something went wrong. please try again later.</Text>
        </View>
    )
}

export default ErrorComponent
