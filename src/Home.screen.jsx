import React, { useEffect } from "react";
import { View } from "react-native";
import Balance from "./Wallet/Components/Balance.component";
import QuickButtonCotainer from './Activities/Components/QuickButtonContainer.component';
import ActivityList from "./Activities/Components/ActivityList.component";
import store from "./Shareds/store";

export default function HomeScreen({navigation, route}) {
    
    useEffect(() => {
        store.dispatch({type: "SHOW_PANEL", showPanel: true}); 
    }, [])
    return (
        <View style={{flex: 1, backgroundColor: "#fff"}}>
            <Balance />
            <QuickButtonCotainer />
            <ActivityList />
        </View>
    )
}