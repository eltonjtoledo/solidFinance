import React, { useState } from "react";
import { StyleSheet, Text, View, Animated, ScrollView, TouchableOpacity } from "react-native";
import { colorsDefault, viewport } from "../../Shareds/Styles";
import QuickButton from "./QuickButton.component";
import Icon from 'react-native-vector-icons/Feather';

const QuickButtonCotainer = ()=> {
    const [QuickButtonList, setQuickButtonList] = useState([{name: 'Payments', icon: 'payments', active: true},
    {name: 'Request Payments', icon: 'save-alt', active: false},
    {name: 'Teste', icon: 'home', active: false}]);

    function activeQuickButtons(i){
        const btns = QuickButtonList.map(btn => {
            btn.active = false;
            return btn;
        });
        btns[i].active = true;
        setQuickButtonList([...btns]);
    }

    return (
        <View style={style.containerQuickButtons}>
            <ScrollView style={{flex: 1, marginRight: 5, overflow: "hidden"}} horizontal={true} bounces={true} showsHorizontalScrollIndicator={false}>
            {QuickButtonList.map((item, i)=>{
                return <QuickButton key={i} onPress={() => activeQuickButtons(i)} title={`${item.name}`} selected={item.active} iconName={item.icon} />
            })}
            </ScrollView>
            <TouchableOpacity style={style.quickButtonMore}>
                <Icon name="more-vertical" color="grey" size={30} />
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    containerQuickButtons: {
        height: viewport.height * 0.16,
        padding: 7,
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "flex-start",
        overflow:"visible"
    },
    quickButtonMore: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'flex-start',
        maxWidth: 30,
        borderRadius: 5,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginLeft: -2,
        elevation: 2
    }
})

export default QuickButtonCotainer;