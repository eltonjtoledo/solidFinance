import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Animated, {Easing, useAnimatedStyle, useSharedValue, withTiming, interpolate, Extrapolate, withSpring} from "react-native-reanimated";


export default function WalletScreen({navigation, route}){
    const titlePosition = useSharedValue(100);
    const squarePositionX = useSharedValue(-100);
    const squarePositionY = useSharedValue(-200);


    const titleStyle = useAnimatedStyle(()=>{
        return {
            transform: [{translateY: titlePosition.value}],
            opacity: interpolate(titlePosition.value, [100, 0], [0, 1], Extrapolate.CLAMP)
        }
    });

    const squareStyle = useAnimatedStyle(()=>{
        return {
            transform: [{translateY: withTiming(squarePositionY.value, {duration: 2000, easing: Easing.bounce})}, {translateX:  withTiming(squarePositionX.value, {duration: 500, easing: Easing.bounce})}]
        }
    })

    useEffect(()=>{
        setTimeout(()=>{
            titlePosition.value = withTiming(0, {duration: 1000, easing: Easing.bounce})
        }, 500)

        // squarePositionY.value = withTiming(0, {duration: 1000, easing: Easing.bounce})
        // squarePositionX.value = withTiming(0, {duration: 1000, easing: Easing.circle})
    }, [])

const pressed = ()=>{
    if(squarePositionY.value <= 1 && squarePositionX.value <= 1 ){
        squarePositionY.value = 100;
        squarePositionX.value = 100;
    }else{
        squarePositionY.value = -200;
        squarePositionX.value = -100;
    }
}


    return(
        <View style={style.pageContainer}>
            <Animated.View style={[{width: 100, height: 100, backgroundColor: "#155D4D", borderBottomColor: "red", borderBottomWidth: 2}, squareStyle]} />
            <Animated.Text style={[style.title, titleStyle]}>Wallet</Animated.Text>
            <TouchableOpacity onPress={pressed} style={[
                {backgroundColor: "#9e9e9e", padding: 10, marginTop: 20, borderRadius: 10, width: 200, justifyContent: "center", alignItems: "center"}
                ]}><Text>Press Me</Text></TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    pageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#13131A"
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: '#fff'
    }
})