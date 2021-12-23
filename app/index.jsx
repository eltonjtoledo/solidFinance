import * as React from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Routes

// import Wallet from './screens/Wallet.screen';
// import Users from './screens/Users.screen';
// import Settings from './screens/Settings.screen';
function Index() {
  const Tab = createBottomTabNavigator();

  return (
  <NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
</NavigationContainer>


    // <NavigationContainer >
    //   {/* <StatusBar barStyle="dark-content" backgroundColor="#eef" /> */}
    //   <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false}}>
    //     {/* <Stack.Screen name="Login" component={Login} /> */}
    //      <Stack.Screen name="Home" component={Home} />{/*
    //     <Stack.Screen name="Wallet" component={Wallet} />
    //     <Stack.Screen name="users" component={Users} />
    //     <Stack.Screen name="Settings" component={Settings} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default Index;