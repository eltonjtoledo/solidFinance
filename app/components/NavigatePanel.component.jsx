import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements'
import { colorsDefault, styleGlobal, viewport } from "../globals/styleGlobal";


export default function NavigatePanel({navigation, route}) {
    const [buttons, setbuttons] = useState([
        {active: false, name: "Home", route: "Home", icon: {name: "home", type: "antdesign"}},
        {active: false, name: "Carteira", route: "Wallet", icon: {name: "wallet", type: "simple-line-icon"}},
        {active: false, name: "Usuário", route: "users", icon: {name: "users", type: "feather"}},
        {active: false, name: "Configuração", route: "Settings", icon: {name: "settings", type: "feather"}},
    ]);

    buttons[buttons.findIndex(b => b.route == route.name)].active = true;

    let mountButtons = [];
    return (
        <View style={style.panel}>
            {buttons.forEach((button, index) => {
               mountButtons.push(
                <TouchableOpacity style={style.button} key={index} onPress={()=> selectRoute(index)} >
                       <Icon {...button.icon} size={33} color={button.active != true ? colorsDefault.primary : colorsDefault.secundary} />
                       <Text>{button.name}</Text>
                   </TouchableOpacity>
               )
            })}
            {mountButtons}
        </View>
    );

    function selectRoute(index) {
        let tmpButton = buttons.map(item => {
            item.active = false
            return item;
        });

        navigation.navigate(`${tmpButton[index].route}`);
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
        left:3,
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