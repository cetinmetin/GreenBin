import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, } from 'react-native';
import Home from "./screens/HomeScreen"
import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import * as firebase from 'firebase'

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyCoL-9DwT7mB4gBRwd_x_spDBtaqVzvfB8",
  authDomain: "dbgreenbin.firebaseapp.com",
  databaseURL: "https://dbgreenbin.firebaseio.com",
  projectId: "dbgreenbin",
  storageBucket: "dbgreenbin.appspot.com",
  messagingSenderId: "1053454506749",
  appId: "1:1053454506749:web:c04fb7b5642bef5cc53c94",
  measurementId: "G-E3ZHEZGE3R"
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
