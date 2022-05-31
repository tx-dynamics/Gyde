import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, Pressable, ScrollView, TextInput } from 'react-native'

import HeaderComp from '../../Componenets/HeaderComp';
import InputHeader from '../../Componenets/InputHeader';
import { iconPath } from '../../Constants/icon';
import { wp, hp } from '../../Helpers/Responsiveness';
import moment from 'moment';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

const DATA = [
    { id: 1, rating: false }, { id: 2, rating: true }, { id: 3, rating: true }
]

export default function CancelledCard(props) {
    return (

        <View style={[styles.boxWithShadow, {
            width: wp(90), alignSelf: "center", marginTop: wp(2),
            borderRadius: 20, borderColor: "blue", borderWidth: .5
        }]}>
            <View style={{
                backgroundColor: "#27DF52", width: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20,
                alignItems: "center", justifyContent: "center", paddingVertical: 13
            }}>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17, maxWidth: wp(65) }}>{"Class 1: C++"}</Text>
            </View>

            <Text style={{ color: 'black', fontSize: 14, maxWidth: wp(65), marginHorizontal: 10, marginTop: 10 }}>{"Date: June 25, 2020 \nStart Time: 08:00 AM EST\nClass duration: 60 min\nMode: Physical\nMeeting Place: Starbucks\nClass Size: Individual"}</Text>
            <Text style={{ color: 'black', fontSize: 14, maxWidth: wp(65), marginHorizontal: 10, marginVertical: 20 }}>{"Order Id: GRD-2020-05-10-28-10"}</Text>

           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor: "#fff"
    }
})