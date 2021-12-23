import React from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { Feather } from '@expo/vector-icons';
import { colorsDefault, viewport } from "../globals/styleGlobal";
import QuickButton from "./QuickButton.component";
import { FlatList } from "react-native";
import { PanGestureHandler, state } from "react-native-gesture-handler";

export default function QuickButtonCotainer() {

    return (
        <View style={style.containerQuickButtons}>
            <View style={{
            flex: 1,
            marginRight: 5,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "stretch", overflow: "hidden"}}>
                <QuickButton title="add" selected={true} />
                <QuickButton selected={false} />
            </View>
            <View style={style.quickButtonMore}>
                <Feather name="more-vertical" color="grey" size={30} />
            </View>




        </View>
    )
}

const style = StyleSheet.create({
    containerQuickButtons: {
        height: viewport.height * 0.16,
        padding: 7,
        flexDirection: "row",
        backgroundColor: "#eee",
        alignItems: "stretch",
        justifyContent: "flex-start"
    },
    quickButtonMore: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'flex-start',
        maxWidth: 30,
        borderRadius: 5,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 3,
        borderColor: "#ddd",
        marginLeft: -10
    }
})