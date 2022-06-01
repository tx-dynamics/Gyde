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

export default function Rating(props) {
    return (
        <View>
            <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ backgroundColor: "#27DF52", width: wp(15), height: wp(15), borderRadius: wp(8), justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 17, color: "#FFF", fontWeight: "bold" }}>{"4.0"}</Text>
                </View>
                <View style={{ height: 10, backgroundColor: "rgba(39, 223, 82, 0.5)", width: wp(23) }}></View>
                <View style={{ backgroundColor: "#d3d3d3", width: wp(15), height: wp(15), borderRadius: wp(8), justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 17, color: "#FFF", fontWeight: "bold" }}>{"4.5"}</Text>
                </View>
                <View style={{ height: 10, backgroundColor: "rgba(39, 223, 82, 0.5)", width: wp(23) }}></View>
                <View style={{ backgroundColor: "#FFC107", width: wp(15), height: wp(15), borderRadius: wp(8), justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 17, color: "#FFF", fontWeight: "bold" }}>{"4.7"}</Text>
                </View>
            </View>

            <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: wp(7) }}>
                <Text style={{ fontSize: 37, color: "#FFC107", fontWeight: "bold", alignSelf: "center" }}>{"4.6"}</Text>
                <Icon name={'star'} size={38} color={"#FFC107"} />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 20, color: "#FFC107", fontWeight: "bold", alignSelf: "center" }}>{"5"}</Text>
                <Icon name={'star'} size={20} color={"#FFC107"} style={{ marginRight: 5 }} />
                <View style={{ backgroundColor: "#d3d3d3", width: "80%", height: wp(1.5) }}>
                    <View style={{ backgroundColor: "#27DF52", width: "90%", height: wp(1.5) }}></View>
                </View>
                <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", alignSelf: "center", marginLeft: 6 }}>{"150"}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 7 }}>
                <Text style={{ fontSize: 20, color: "#FFC107", fontWeight: "bold", alignSelf: "center" }}>{"4"}</Text>
                <Icon name={'star'} size={20} color={"#FFC107"} style={{ marginRight: 5 }} />
                <View style={{ backgroundColor: "#d3d3d3", width: "80%", height: wp(1.5) }}>
                    <View style={{ backgroundColor: "#27DF52", width: "90%", height: wp(1.5) }}></View>
                </View>
                <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", alignSelf: "center", marginLeft: 6 }}>{"150"}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 7 }}>
                <Text style={{ fontSize: 20, color: "#FFC107", fontWeight: "bold", alignSelf: "center" }}>{"3"}</Text>
                <Icon name={'star'} size={20} color={"#FFC107"} style={{ marginRight: 5 }} />
                <View style={{ backgroundColor: "#d3d3d3", width: "80%", height: wp(1.5) }}>
                    <View style={{ backgroundColor: "#27DF52", width: "20%", height: wp(1.5) }}></View>
                </View>
                <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", alignSelf: "center", marginLeft: 6 }}>{"10"}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 7 }}>
                <Text style={{ fontSize: 20, color: "#FFC107", fontWeight: "bold", alignSelf: "center" }}>{"2"}</Text>
                <Icon name={'star'} size={20} color={"#FFC107"} style={{ marginRight: 5 }} />
                <View style={{ backgroundColor: "#d3d3d3", width: "80%", height: wp(1.5) }}>
                    <View style={{ backgroundColor: "#27DF52", width: "10%", height: wp(1.5) }}></View>
                </View>
                <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", alignSelf: "center", marginLeft: 6 }}>{"5"}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 7 }}>
                <Text style={{ fontSize: 20, color: "#FFC107", fontWeight: "bold", alignSelf: "center" }}>{"1"}</Text>
                <Icon name={'star'} size={20} color={"#FFC107"} style={{ marginRight: 5 }} />
                <View style={{ backgroundColor: "#d3d3d3", width: "80%", height: wp(1.5) }}>
                    <View style={{ backgroundColor: "#27DF52", width: "5%", height: wp(1.5) }}></View>
                </View>
                <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", alignSelf: "center", marginLeft: 6 }}>{"5"}</Text>
            </View>

            <Text style={{
                color: "#000", paddingVertical: 12,
                borderTopLeftRadius: 10, borderBottomLeftRadius: 10
            }}>{"Your rating is average of all the ratings you've received from the instructors you've had classes with and is measured out of 5 starts."}</Text>
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