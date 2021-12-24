import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colorsDefault, styleGlobal, viewport } from "../globals/styleGlobal";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NavigatePanel({ navigation, route }) {
    const [btnNavivate, setBtnNavivate] = useState([{ active: true, name: "Home", route: "Home", icon: { name: "home", size: 32} },
    { active: false, name: "Carteira", route: "Wallet", icon: { name: "account-balance-wallet", size: 32} },
    { active: false, name: "Usuário", route: "users", icon: { name: "people", size: 32}},
    { active: false, name: "Configuração", route: "Settings", icon: { name: "settings", size: 32} }]);
    return (
        <View style={style.panel}>
            {btnNavivate.map((button, index) => {
                return (<TouchableOpacity style={style.button} key={index} onPress={() => selectRoute(index)}>
                    <Icon {...button.icon} color={button.active == true ? colorsDefault.secundary : colorsDefault.primary} />
                    <Text style={{fontWeight: "900", display: button.active == true ? "flex" : "none"}}>{button.name}</Text>
                </TouchableOpacity>);
            })}
        </View>
    );

    function selectRoute(index) {
        let tmpButton = btnNavivate.map(item => {
            item.active = false
            return item;
        });
        tmpButton[index].active = true;
        navigation.navigate(`${tmpButton[index].route}`);
        setBtnNavivate([...tmpButton]);
    }
}

const style = StyleSheet.create({
    panel: {
        ...styleGlobal.content,
        elevation: 4,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingLeft: 30,
        borderTopLeftRadius: 40,
        width: viewport.width + 2,
        height: viewport.height / 9,
        flexWrap: 'wrap',
        bottom: 1,
        left: 3,
        position: "absolute"
    },
    button: {
        position: "relative",
        minWidth: viewport.width / 5,
        alignItems: "center",
        padding: 10,
        margin: 2
    },
})