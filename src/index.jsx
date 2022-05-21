import * as React from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';
import NavigatePanel from './Shareds/Components/NavigatePanel.component';

import Home from './Home.screen'
import Settings from './Settings/Settings.screen'
import Activities from './Activities/index';
import Users from './Users/Users.screen'
import Wallet from './Wallet/Wallet.screen'
import Login from './Users/Login.screen'

const Stack = createNativeStackNavigator();

function Index({navigation, showPanel}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="users" component={Users} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Activities" component={Activities} />
      </Stack.Navigator>
      {showPanel == true ? <NavigatePanel /> : <></>}
    </NavigationContainer>
  );
}

export default connect(state =>({
  showPanel: state.showPanel
}))(Index);