import React from "react";
import 'react-native-gesture-handler';
import { Animated, Text, View } from "react-native";
export default function WalletScreen({navigation, route}){
    return(
        <View style={{flex: 1}}>
            <Text>Wallet</Text>
            <NavigatePanel navigation={navigation} route={route} />
        </View>
    )
}