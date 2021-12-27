import React from "react";
import { Text, View } from "react-native";
import Balance from "./Wallet/Components/Balance.component";
import NavigatePanel from './Shareds/Components/NavigatePanel.component';
import QuickButtonCotainer from './Activities/Components/QuickButtonContainer.component';
import ActivityList from "./Activities/Components/ActivityList.component";
import store from "./Shareds/store";

export default function HomeScreen({navigation, route}) {
    // store.dispatch({type: "SET_NAVIGATION", navigation})    

    return (
        <View style={{flex: 1, backgroundColor: "#fff"}}>
            <Balance />
            <QuickButtonCotainer />
            <ActivityList />
        </View>
    )
}