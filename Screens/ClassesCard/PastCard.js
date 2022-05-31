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

export default function PastCard(props) {
    return (

        <View style={[styles.boxWithShadow, {
            width: wp(90), alignSelf: "center", marginTop: wp(2),
            borderRadius: 20, borderColor: "blue", borderWidth: .5,
            paddingBottom: 20, marginBottom: 20
        }]}>
            <View style={{
                backgroundColor: "#27DF52", width: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20,
                alignItems: "center", justifyContent: "center", paddingVertical: 13
            }}>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17, maxWidth: wp(65) }}>{"Class 1: C++"}</Text>
            </View>

            <Text style={{ color: 'black', fontSize: 14, marginHorizontal: 10, marginTop: 10 }}>{"Date: June 25, 2020 \nStart Time: 08:00 AM EST\nClass duration: 60 min\nMode: Physical\nMeeting Place: Starbucks\nClass Size: Individual"}</Text>
            <Text style={{ color: 'black', fontSize: 14, marginHorizontal: 10, marginTop: 20 }}>{"Order Id: GRD-2020-05-10-28-10"}</Text>

            <View style={{ flexDirection: "row", marginBottom: 10, marginTop: 5 }}>
                <Text style={{ color: 'black', fontSize: 14, marginHorizontal: 10, }}>{"Rating: "}</Text>
                <Stars
                    count={5}
                    disabled
                    default={5}
                    fullStar={<Icon name={'star'} size={20} color={"#FFC107"} />}
                    emptyStar={<Icon name={'star-outline'} size={20} color={"#000"} />}

                />
            </View>

            <Text style={{ fontWeight: "bold", color: 'black', fontSize: 17, marginHorizontal: 10, }}>{"Compliment "}</Text>

            <TextInput style={[styles.boxWithShadow, { marginHorizontal: 15, marginTop: 8, borderRadius: 10, paddingLeft: 10, color: "black", fontWeight: "bold" }]}
                placeholder={"Excellent Instructure"} />

            <Text style={{ fontWeight: "bold", color: 'black', fontSize: 17, marginHorizontal: 10, marginTop: 12 }}>{"Messages "}</Text>

            <View style={[styles.boxWithShadow, { marginHorizontal: 15, paddingHorizontal: 10, paddingVertical: 15, marginTop: 8, borderRadius: 10 }]}>
                <View style={{ flexDirection: "row", justifyContent:"space-between" }}>
                    <Text style={{fontSize:13, color: "#27DF52" }}>{"You"}
                        <Text style={{ color: 'gray' }}> {": When does our class start?"} </Text></Text>
                    <Text style={{fontSize:12, color: "gray" }}>{"June 9 2020"}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent:"space-between", marginTop:5 }}>
                    <Text style={{fontSize:13, color: "#27DF52" }}>{"Sarah"}
                        <Text style={{ color: 'gray' }}> {": It starts at 05:00 pm today"} </Text></Text>
                    <Text style={{fontSize:12, color: "gray" }}>{"June 9 2020"}</Text>
                </View>
            </View>

            <Text style={{ fontWeight: "bold", color: 'black', fontSize: 17, marginHorizontal: 10, marginTop: 12 }}>{"Calls "}</Text>

            <View style={[styles.boxWithShadow, { marginHorizontal: 15, paddingHorizontal: 10, paddingVertical: 15, marginTop: 8, borderRadius: 10 }]}>
                <Text style={{ color: 'gray' }}>{"June 9 2020 08:00 PM EST you called the instructor, The call lasted 4 min 30 sec"}</Text>
            </View>


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