import React from "react";
import { TouchableOpacity } from "react-native";
import { TouchableHighlight } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from 'react-native-elements';
import { colorsDefault, viewport } from "../globals/styleGlobal";

export default function QuickButton({ title, selected }) {
    const style = StyleSheet.create({
        QuickButton: {
            margin: 5,
            width: viewport.width / 4.2,
            borderRadius: 13,
            backgroundColor: selected ? colorsDefault.secundary : "#fff",
            maxWidth: viewport.width / 4.2,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
        },
        QuickButton_title: {
            color: !selected ? colorsDefault.secundary : "#fff",
            fontSize: 16,
            marginTop: 20
        }
    });

    return (
        <TouchableOpacity style={style.QuickButton}>
            <View>
            <Icon type="MaterialIcons" name="playlist-add" color={!selected ? colorsDefault.secundary : "#fff"} size={30} />
            <Text style={style.QuickButton_title}>{title || 'teste'}</Text>
            </View>
        </TouchableOpacity>
    )
}

