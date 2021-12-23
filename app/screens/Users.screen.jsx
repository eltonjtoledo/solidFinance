import React from "react";
import { Text, View } from "react-native";
import NavigatePanel from "../components/NavigatePanel.component";

export default function UsersScreen({navigation, route}){

    return (
        <View style={{flex: 1}}>
            <Text>Users</Text>
            <NavigatePanel navigation={navigation} route={route} />
        </View>
    )
}