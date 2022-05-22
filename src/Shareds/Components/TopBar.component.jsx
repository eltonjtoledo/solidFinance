import React, { useEffect, useRef } from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import Animated, { withTiming, useAnimatedStyle, useSharedValue, Easing } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/Ionicons';
import { colorsDefault } from "../Styles";

export default function TopBar({ navigation, title, searchable, }) {
const showSearch = useSharedValue(false);
const titlePositionX = useSharedValue(0);
const titlePositionY = useSharedValue(0);
const inputPositionX = useSharedValue(-30);
const inputPositionY = useSharedValue(-100);

const inputShow = useSharedValue(0);

const showTitleStyle = useAnimatedStyle( _ => ({transform: [{translateX: withTiming(titlePositionX.value, {duration: 300})}, {translateY: withTiming(titlePositionY.value, {duration: 300})}]}));
const showInputStyle = useAnimatedStyle( _ => ({transform: [{translateX: withTiming(inputPositionX.value, {duration: 300})}, {translateY: withTiming(inputPositionY.value, {duration: 300, easing: Easing.bounce})}]}));

useEffect(()=>{

}, [])

const showSearchInput = () => {
    if(!showSearch.value){
        titlePositionY.value = -100;
        inputPositionY.value = 5
        inputPositionX.value = 0
    }else{
        titlePositionY.value = 0;
        inputPositionY.value = -100
        inputPositionX.value = -30
    }

    showSearch.value = !showSearch.value
}
    return (
        <View>
            <View style={{ height: 50, flexDirection: "row" }}>
                <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }} onPress={()=> navigation.navigate("Home")}>
                    <Icon name='arrow-back' size={30} color={colorsDefault.primary} />
                </TouchableOpacity>
                <View style={{ flex: 4, justifyContent: "center", alignItems: "center"}}>
                    <Animated.Text style={[{ fontSize: 22, color: colorsDefault.primary, position:"absolute"}, showTitleStyle]}>{title}</Animated.Text>
                    
                    <Animated.View style={[{ width: "100%", position: "absolute"},showInputStyle]}>
                    <TextInput name="Username" placeholder="Type your Search" style={[{width: '100%', borderColor: colorsDefault.secundary, borderWidth: 1, 
                        borderStyle: "solid", borderRadius: 5, paddingHorizontal: 10}]} /> 
                    </Animated.View>
                
                </View>
                    <TouchableOpacity onPress={showSearchInput} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Icon name='search' size={30} color={colorsDefault.primary} />
                    </TouchableOpacity>
            </View>
        </View>
    )
}

