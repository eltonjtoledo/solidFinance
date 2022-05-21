import React from 'react';
import { Appearance, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colorsDefault } from '../../Shareds/Styles';

const theme = Appearance.getColorScheme();
export default function ActivityItem({credit, name, date, value}) {
    return (
        <View style={style.activityItem}>
            <View style={style.iconContainer}>
                <Icon name='home' size={38} color={theme == 'dark' ? "#eee" : colorsDefault.primary} />
            </View>

            <View style={style.activityIdentify}>
                <Text style={style.activityName}>{name}</Text>
                <Text style={style.activityTime}>{date}</Text>
            </View>
            <View style={style.activityValue}>
                <Text style={{fontSize: 14, fontWeight: "700", color: credit ? colorsDefault.credit : colorsDefault.debit}}>{value}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    activityItem: {
        paddingHorizontal: 20,
        height: 90,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#fff',
        shadowColor: '#003',
        marginVertical: 3
    },
    iconContainer: {
        backgroundColor: "#e1e7ed",
        width: 45,
        height: 45,
        borderRadius: 23,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15
    },
    activityIdentify: {
        flex: 3
    },
    activityName: {
        fontSize: 20,
        fontWeight: "400",
        color: theme == 'dark' ? "#eee" : colorsDefault.primary
    },
    activityTime: {
        fontSize: 12,
        marginTop: 5,
        color: theme == 'dark' ? "#eee" : colorsDefault.primary
    },
    activityValue: {
        flex: 1,
        height: 60,
        alignItems: "center",
        justifyContent: "center"
    }
});