import React from "react";
import { Text, View } from "react-native";
import Balance from "../components/Balance.component";
import NavigatePanel from '../components/NavigatePanel.component';
import QuickButtonCotainer from '../components/QuickButtonContainer.component';

export default function HomeScreen({navigation, route}) {
    return (
        <View style={{flex: 1}}>
            
            {/* <Balance />
            <QuickButtonCotainer />
            <Text>Página Home</Text>
            <NavigatePanel navigation={navigation} route={route} /> */}
        </View>
    )
}