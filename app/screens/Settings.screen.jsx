import React from "react";
import { Text, View } from "react-native";
import NavigatePanel from "../components/NavigatePanel.component";

export default function SettingsScreen({navigation, route}){
    return (
        <View style={{flex: 1}}>
            <Text>Settings</Text>
            <NavigatePanel navigation={navigation} route={route} />
        </View>
    )
}