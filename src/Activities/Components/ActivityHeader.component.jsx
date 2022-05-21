import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { styleGlobal, colorsDefault } from "../../Shareds/Styles";

export default function ActivityHeader({ }) {
    const filters = [
        { title: "All", active: true },
        { title: "Income", active: false },
        { title: "Outcome", active: false }
    ];
    return (
        <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 20 }}>{
            filters.map((filter, index) => (
                <TouchableOpacity key={index} style={[Styles.headerItem, filter.active ? Styles.active : Styles.inactive]}>
                    <Text style={[{ fontSize: 18 }, !filter.active ? {color: colorsDefault.primary} : {color: '#fff'}]}>{filter.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const Styles = StyleSheet.create({
    headerItem: {
        flex: 1,
        margin: 10,
        padding: 10,
        maxWidth: 100,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    active: {
        backgroundColor: colorsDefault.secundary,
    },
    inactive: {
        borderWidth: 1,
        borderColor: colorsDefault.primary
    }
})