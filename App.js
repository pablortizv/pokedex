import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './src/views/homeScreen';
import {View,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokemon from './src/views/pokemon';
import styles from './src/styles/styles';
import ModalDev from './src/components/modalDev';


const App = () => {

  const [modal, setModal] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <View style={[styles.bgPokedex, styles.flex]}>
        <ModalDev modal={modal} onRequestClose={() => setModal(!modal)} />
        <View style={styles.viewHeader}>
          <View>
            <TouchableOpacity
              style={styles.btnTop}
              onPress={() => setModal(!modal)}
            />
          </View>
        </View>
        <View style={styles.content}>
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
