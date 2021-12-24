import * as React from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home.screen'
import Settings from './screens/Settings.screen'
import Users from './screens/Users.screen'
import Wallet from './screens/Wallet.screen'
import Login from './screens/Login.screen'

const Stack = createNativeStackNavigator();

function Index() {

  return (
    <NavigationContainer>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#eef" /> */}
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="users" component={Users} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;