import React from 'react';
import { View, Image, Text } from 'react-native';

function LoadingComponent() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
           <Image style={{height:'25%', resizeMode:'contain'}} source={require('../assets/loading.png')}/>
           <Text>Wait a moment, loading...</Text>
        </View>
    )
}

export default LoadingComponent
