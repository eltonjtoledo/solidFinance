import React, { useEffect, useRef } from "react";
import { Text, TouchableOpacity, View, Animated, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { colorsDefault } from "../Styles";

export default function TopBar({ navigation, title, searchable, }) {
let showSearch = false;


const showSearchInput = () => {
    showSearch = !showSearch;
    console.log(showSearch);
}
    return (
        <View>
            <View style={{ height: 50, flexDirection: "row" }}>
                <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Icon name='arrow-back' size={30} color={colorsDefault.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 4, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{ fontSize: 22, color: colorsDefault.primary, display: showSearch ? "none" : "flex" }}>{title}</Text>
                    <TextInput name="Username" placeholder="type your Search" style={{width: '100%', borderColor: '#ccc', borderWidth: 2, 
                        borderStyle: "solid", borderRadius: 5, paddingHorizontal: 10, display: showSearch ? "flex": "none"}}/> 
                </TouchableOpacity>
                    <TouchableOpacity onPress={showSearchInput} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Icon name='search' size={30} color={colorsDefault.primary} />
                    </TouchableOpacity>
            </View>
        </View>
    )
}

