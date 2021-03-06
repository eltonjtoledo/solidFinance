import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colorsDefault, styleGlobal, viewport } from "../Styles";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from "react-redux";
import store from '../store/index'

function NavigatePanel({ navigation, routes, activeRoute }) {
    return (
        <View style={{position: "relative", bottom: 1, left: 3, width: viewport.width + 2, backgroundColor: "#fff", flex: 1, maxHeight: viewport.height / 9,}}>
            <View  style={style.panel}>
                {routes.map((button, index) => {
                    return (<TouchableOpacity style={style.button} key={index} onPress={() => selectRoute(index)}>
                        <Icon {...button.icon} color={button.active == true ? colorsDefault.secundary : colorsDefault.primary} />
                        <Text style={{ fontWeight: "900", display: button.active == true ? "flex" : "none", color: button.active == true ? colorsDefault.secundary : colorsDefault.primary, fontSize: 12 }}>{button.name}</Text>
                    </TouchableOpacity>);
                })}
            </View>
        </View>
    );

    function selectRoute(index) {
        let tmpButton = routes.map(item => {
            item.active = false
            return item;
        });
        tmpButton[index].active = true;
        store.dispatch({
            type: "NAVIGATE",
            btnRoutes: tmpButton,
            navigation
        });
        navigation.navigate(`${tmpButton[index].route}`);
    }
}

const style = StyleSheet.create({
    panel: {
        ...styleGlobal.content,
        elevation: 3,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingLeft: 30,
        borderTopLeftRadius: 40,
        width: viewport.width,
        flexWrap: 'wrap',
        left: -1
    },
    button: {
        position: "relative",
        minWidth: viewport.width / 5,
        alignItems: "center",
        padding: 10,
        margin: 2
    },
});

export default connect(state => ({
    routes: state.routes, activeRoute: state.activeRoute, navigation: state.navigation
}))(NavigatePanel);