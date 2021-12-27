import React from 'react';
import { ScrollView } from 'react-native';
import { Appearance, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { viewport } from '../../Shareds/Styles';
import store from '../../Shareds/store';
import ActivityItem from './ActivityItem.component';

const colorScheme = Appearance.getColorScheme();
function ActivityList({activities}) {
    const createHeader = (showMore, search, filter) => {
        const itens = [];
        if (showMore) itens.push(<TouchableOpacity key={"more-" + Math.random}><Text style={style.activityMore}>View All</Text></TouchableOpacity>);
        if (search) itens.push(<TouchableOpacity key={"search-" + Math.random}><Icon name="search" size={32} /></TouchableOpacity>)
        return itens;
    }
    return (
        <>
            <View style={style.headerTitle}>
                <Text style={style.activityTitle}>Last Activities</Text>
                {createHeader(true, false, true)}
            </View>

            <View style={style.activityList}>
                <ScrollView>
                    {
                        activities.map((activity, index)=>  <ActivityItem {...activity} key={`Activity${index}`} />)
                    }
                </ScrollView>
            </View>
        </>
    );
}

export default connect(state => ({
    activities: state.activities
}))(ActivityList)

const style = StyleSheet.create({
    activityTitle: {
        fontSize: 22,
        fontStyle: "italic",
        fontWeight: "300",
        paddingLeft: 25,
        flex: 3,
        color: colorScheme == 'dark' ? "#ddd" : "#888"
    },
    activityMore: {
        fontSize: 16,
        fontWeight: "700",
        opacity: 0.7,
        flex: 1,
        paddingRight: 20
    },
    headerTitle: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 6
    },
    activityList: {
        flex: 1,
        maxHeight: viewport.height * 0.32,
        overflow: 'scroll',
        flexDirection: "column"
    }
})