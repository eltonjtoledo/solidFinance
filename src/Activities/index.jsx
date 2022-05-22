import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActivityHeader from './Components/ActivityHeader.component';
import ActivityList from './Components/ActivityList.component';
import store from "../Shareds/store";
import TopBar from '../Shareds/Components/TopBar.component';

export default function Index({navigation, route}) {
  React.useEffect(() => {
    store.dispatch({type: "SHOW_PANEL", showPanel: true}); 
}, [])
  return (
      <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
          <TopBar navigation={navigation} title="Activity" />
          <ActivityHeader />
          <ActivityList titleSize={16} navigation={navigation} />
      </SafeAreaView>
  )  
}