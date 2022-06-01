import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, Pressable, ScrollView, TextInput } from 'react-native'

import HeaderComp from '../Componenets/HeaderComp';
import { wp, hp } from '../Helpers/Responsiveness';
import { iconPath } from '../Constants/icon';
import Rating from './RatingCards/Rating'
import Review from './RatingCards/Review'
import Complements from './RatingCards/Complements'
import Requests from './ClassesCard/Requests'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RatingReview(props) {

    const [SelectedType, setSelectedType] = useState("1")

    return (
        <View style={styles.container}>
            <View style={{ width: '85%', marginVertical: '5%', alignSelf: 'center' }}>
                <HeaderComp TEXT="Rating & Review" />
            </View>
            <ScrollView style={{ paddingHorizontal: wp(4) }}>


                <View style={{
                    borderRadius: 10, borderColor: "black", borderWidth: .8, marginVertical: 15,
                    flexDirection: "row", justifyContent: "space-between",
                }}>
                    <Text onPress={() => setSelectedType("1")}
                        style={{
                            flex: 1, backgroundColor: SelectedType == "1" ? "#27DF52" : "#f2f2f2", color: SelectedType == "1" ? "#FFF" : "#000", paddingVertical: 12, textAlign: "center",
                            borderTopLeftRadius: 10, borderBottomLeftRadius: 10
                        }}>{"Rating"}</Text>

                    <View style={{ width: .8, height: "100%", backgroundColor: "black" }}></View>
                    <Text onPress={() => setSelectedType("2")}
                        style={{ flex: 1, backgroundColor: SelectedType == "2" ? "#27DF52" : "#f2f2f2", color: SelectedType == "2" ? "#FFF" : "#000", paddingVertical: 12, textAlign: "center", }}>{"Review"}</Text>
                    <View style={{ width: .8, height: "100%", backgroundColor: "black" }}></View>
                    <Text onPress={() => setSelectedType("3")}
                        style={{
                            flex: 1, backgroundColor: SelectedType == "3" ? "#27DF52" : "#f2f2f2", color: SelectedType == "3" ? "#FFF" : "#000", paddingVertical: 12, textAlign: "center",
                            borderTopRightRadius: 10, borderBottomRightRadius: 10
                        }}>{"Compliments"}</Text>
                </View>
                {SelectedType == "1" &&
                    <Rating />}
                {SelectedType == "2" &&
                    <Review />}
                {SelectedType == "3" &&
                    <Complements />}
                {/* {SelectedType == "4" &&
                <Requests />} */}

            </ScrollView>

            <Pressable style={{ position: "absolute", bottom: wp(15), right: wp(5) }}>
                <Image source={iconPath.greenFloating} style={{ width: wp(19), height: wp(19), resizeMode: "contain" }} />
            </Pressable>

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