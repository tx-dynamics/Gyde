import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, Pressable, ScrollView, TextInput } from 'react-native'

import HeaderComp from '../../Componenets/HeaderComp';
import InputHeader from '../../Componenets/InputHeader';
import { iconPath } from '../../Constants/icon';
import { wp, hp } from '../../Helpers/Responsiveness';
import moment from 'moment';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Slider from '@react-native-community/slider';

const DATA = [
    { id: 1, rating: false }, { id: 2, rating: true }, { id: 3, rating: true }
]

export default function Requests(props) {
    return (
        <View>
            <View style={{ flexDirection: "row", marginBottom: wp(3), }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', color: "#27DF52", fontSize: 15 }}>{"Type"}</Text>
                    <View style={[styles.boxWithShadow, {
                        width: "75%", paddingVertical: 5, flexDirection: "row", paddingHorizontal: 5,
                        marginTop: 10, justifyContent: "space-between"
                    }]}>
                        <Text style={{ color: "gray" }}>{"On-demand"}</Text>
                        <Icon name={'checkbox-blank'} size={22} color={"gray"} />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', color: "#27DF52", fontSize: 15 }}>{"Status"}</Text>
                    <View style={[styles.boxWithShadow, {
                        width: "75%", paddingVertical: 5, flexDirection: "row", paddingHorizontal: 5,
                        marginTop: 10, justifyContent: "space-between"
                    }]}>
                        <Text style={{ color: "gray" }}>{"Active"}</Text>
                        <Icon name={'checkbox-blank'} size={22} color={"gray"} />
                    </View>
                </View>
            </View>

            <View style={[styles.boxWithShadow, {
                width: wp(90), alignSelf: "center", marginTop: wp(2),
                borderRadius: 20, borderColor: "blue", borderWidth: .5, paddingBottom: 15,
                marginBottom:wp(10)
            }]}>
                <View style={{
                    backgroundColor: "#27DF52", width: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20,
                    alignItems: "center", justifyContent: "center", paddingVertical: 13
                }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17, maxWidth: wp(65) }}>{"Class 1: C++"}</Text>
                </View>

                <Text style={{ color: 'black', maxWidth: wp(65), marginHorizontal: 10, marginTop: 10 }}>{"Mode: Online \nRequest Type: On- Demand\nRequested Date: May 10, 2020\nProposed Class Date: May 11, 2020\nProposed Class Time: 09:00 AM EST\nNumber of Classes: 2"}</Text>
                <View style={{ flexDirection: "row", }}>
                    <Text style={{ color: 'black', marginHorizontal: 10, marginTop: 5 }}>{"Price Range"}
                        <Text style={{ color: "gray" }}>{" (in USD):"}</Text></Text>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: 'black', marginHorizontal: 10, borderWidth: 1, borderColor: "black", paddingHorizontal: 10, paddingVertical: 3 }}>{"$10"}</Text>
                        <Text style={{ color: 'black', marginHorizontal: 10, }}>{"Min"}</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: 'black', marginHorizontal: 10, borderWidth: 1, borderColor: "black", paddingHorizontal: 10, paddingVertical: 3 }}>{"$40"}</Text>
                        <Text style={{ color: 'black', marginHorizontal: 10, }}>{"Max"}</Text>
                    </View>
                </View>
                <Text style={{ color: 'black', marginHorizontal: 10, }}>{"Requested Id: GRD-2020-05-10-28-10"}</Text>
                <Text style={{ color: 'black', marginHorizontal: 10, marginTop: 5 }}>{"Status: "}
                    <Text style={{ color: "#27DF52" }}>{"Active"}</Text></Text>
                <Text style={{ color: 'black', marginHorizontal: 10, }}>{"Requested to: Many (2)"}</Text>

                <View style={{ flexDirection: "row", marginTop: 15, paddingHorizontal: 8, alignItems: "center", borderWidth: 1, }}>
                    <Image source={iconPath.manProfileImg} style={{ width: wp(15), height: wp(15), resizeMode: "contain", }} />
                    <Text style={{ color: 'black', }}>{"Sarah Lee"}<Text style={{ color: "#FFC107" }}>{" (5.0)"}</Text></Text>
                    <Icon name={'star'} size={20} color={"#FFC107"} />
                    <Image source={iconPath.FlagImg} style={{ width: wp(8), height: wp(8), resizeMode: "contain", marginLeft: 10 }} />
                    <Image source={iconPath.messageIcon} style={{ width: wp(4), height: wp(4), resizeMode: "contain", marginLeft: wp(9) }} />
                    <Image source={iconPath.CallIcon} style={{ width: wp(4), height: wp(4), resizeMode: "contain", marginLeft: 15 }} />
                    <Entypo name={'circle-with-cross'} size={wp(5.5)} color={"red"} style={{ marginLeft: 10 }} />

                </View>

                <View style={{ flexDirection: "row", paddingHorizontal: wp(8), marginTop: wp(10), marginBottom:wp(5) }}>
                    <Pressable style={{ backgroundColor: "red", flex: 1, paddingVertical: 13, alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>{"Cancel"}</Text>
                    </Pressable>
                    <Pressable style={{ backgroundColor: "#27DF52", flex: 1, paddingVertical: 13, alignItems: "center", justifyContent: "center", borderRadius: 10, marginLeft: 15 }}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>{"Accept"}</Text>
                    </Pressable>

                </View>


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