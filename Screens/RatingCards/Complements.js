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

export default function Complements(props) {
    return (
        <View>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17, marginTop: 15 }}>{"Provide the compliment"}</Text>
            <View style={{ flexDirection: "row", marginBottom: wp(3), marginTop: wp(2) }}>
                <View style={{ flex: 1 }}>
                    <View style={[styles.boxWithShadow, {
                        width: "75%", paddingVertical: 13, paddingHorizontal: 5,
                        marginTop: 10, justifyContent: "center", borderRadius: 5, alignItems: "center",
                        flexDirection: "row"
                    }]}>
                        <Image source={iconPath.yellowBulb} style={{ width: wp(5), height: wp(5), resizeMode: "contain" }} />
                        <Text style={{ color: "gray", marginLeft: 8 }}>{"Genius Learner"}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
                    <View style={[styles.boxWithShadow, {
                        width: "75%", paddingVertical: 13, paddingHorizontal: 5,
                        marginTop: 10, justifyContent: "center", borderRadius: 5, alignItems: "center"
                    }]}>
                        <Text style={{ color: "gray" }}>{"Polite"}</Text>
                    </View>
                </View>
            </View>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17, marginTop: 15 }}>{"Report a Problem"}</Text>

            <TextInput multiline={true} style={[styles.boxWithShadow, { height: wp(35), marginTop: 10, borderRadius: 8 }]} />
            <Text style={{ color: 'gray', fontSize: 12, marginTop: 3, alignSelf: "flex-end" }}>{"Max 250"}</Text>

            <View style={{ flexDirection: "row", paddingHorizontal: wp(8), marginTop: wp(10), marginBottom: wp(5) }}>
                <Pressable style={{ backgroundColor: "red", flex: 1, paddingVertical: 13, alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>{"Cancel"}</Text>
                </Pressable>
                <Pressable style={{ backgroundColor: "#27DF52", flex: 1, paddingVertical: 13, alignItems: "center", justifyContent: "center", borderRadius: 10, marginLeft: 15 }}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>{"Submit"}</Text>
                </Pressable>

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