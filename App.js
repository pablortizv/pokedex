import React, {useEffect} from 'react';
import HomeScreen from './src/views/homeScreen';
import {View, Text, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';
import Pokemon from './src/views/pokemon';


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const Stack = createNativeStackNavigator();
  return (
    <View style={{backgroundColor: '#D01E36', flex:1}}>
        <View style={{height:(windowHeight * .1),width:'100%', flexDirection:'row', borderBottomWidth:3, padding:5}}>
          <View>
            <TouchableOpacity
              style={{width:(windowHeight * .08 ), height:(windowHeight * .08 ), borderRadius: 80, backgroundColor:"#5BC5FF", borderWidth:3}}
            />
          </View>
        </View>
        <View style={{height:(windowHeight * .9), width: windowWidth, padding:(windowWidth*.05)}}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Detail" component={Pokemon} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
    </View>
  );
};

export default App;
