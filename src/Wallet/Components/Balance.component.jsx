import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colorsDefault, styleGlobal, viewport } from "../../Shareds/Styles";

export default function Balance() {
    return (
        <View style={style.box_balance}>
            <Text style={style.text_small}>Hello, User</Text>
            <View style={{marginTop: 10}}>
                <Text style={style.text_large}>R$ 189,99</Text>
                <Text style={[style.text_small]}>Your Balance</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
            <View style={style.box_credit}>
                    <Text style={[style.text_midle, { color: colorsDefault.credit }]}>R$ 2.887,60</Text>
                    <Text style={[style.text_small, {textAlign: "center"}]}>Credit</Text>
                </View>
                <View style={style.box_credit}>
                    <Text style={[style.text_midle, { color: colorsDefault.debit }]}>R$ 2007,60</Text>
                    <Text style={[style.text_small, {textAlign: "center"}]}>Debit</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    box_balance: {
        backgroundColor: colorsDefault.primary,
        paddingHorizontal: 15,
        paddingVertical: 20,
        height: viewport.height / 3.7,
        borderBottomRightRadius: 50,
        elevation: 5
    },
    box_credit:{
        maxWidth: viewport.width * 0.4, 
        flex: 1, 
        margin: 2, 
        marginHorizontal: 10,
        backgroundColor: 'rgba(34, 34, 34, 1)',
        padding: 6, 
        borderRadius: 10,
        elevation: 5
    },
    text_small:{
        color: "white",
        fontSize: 18,
        fontWeight: "100"
    },
    text_midle: {
        color: "white",
        fontSize: 25,
        fontWeight: "normal"
    },
    text_large: {
        color: "white",
        fontSize: 35,
        fontWeight: "normal"
    }
})