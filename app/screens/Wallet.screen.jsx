import React from "react";
import { Animated, Text, View } from "react-native";
import NavigatePanel from '../components/NavigatePanel.component'
export default function WalletScreen({navigation, route}){
    return(
        <View style={{flex: 1}}>
            <Text>Wallet</Text>
            <NavigatePanel navigation={navigation} route={route} />
        </View>
    )
}