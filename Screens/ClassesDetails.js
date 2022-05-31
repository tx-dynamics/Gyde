import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, Pressable, ScrollView, TextInput } from 'react-native'

import HeaderComp from '../Componenets/HeaderComp';
import { wp, hp } from '../Helpers/Responsiveness';
import { iconPath } from '../Constants/icon';
import PendingCard from './ClassesCard/PendingCard'
import PastCard from './ClassesCard/PastCard'
import CancelledCard from './ClassesCard/CancelledCard'

export default function ClassesDetails(props) {

    const [SelectedType, setSelectedType] = useState("1")

    return (
        <View style={styles.container}>
            <View style={{ width: '85%', marginVertical: '5%', alignSelf: 'center' }}>
                <HeaderComp TEXT="Classes" />
            </View>
            <ScrollView style={{ paddingHorizontal: wp(4) }}>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontWeight: 'bold', color: "#27DF52" }}>{"Pending"}
                        <Text style={{ color: 'black' }}> {": 4"} </Text></Text>
                    <Text style={{ fontWeight: 'bold', color: 'black', color: "#27DF52" }}>{"Cancelled"}
                        <Text style={{ color: 'black' }}> {": 2"} </Text></Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 14 }}>
                    <Text style={{ fontWeight: 'bold', color: "#27DF52" }}>{"Past"}
                        <Text style={{ color: 'black' }}> {": $40"} </Text></Text>
                    <Text style={{ fontWeight: 'bold', color: 'black', color: "#27DF52" }}>{"Active requests"}
                        <Text style={{ color: 'black' }}> {": 0"} </Text></Text>
                </View>

                <View style={{
                    borderRadius: 10, borderColor: "black", borderWidth: .5, marginVertical: 20,
                    flexDirection: "row", justifyContent: "space-between",
                }}>
                    <Text onPress={() => setSelectedType("1")}
                        style={{
                            flex: 1, backgroundColor: SelectedType == "1" ? "#27DF52" : "#f2f2f2", color: SelectedType == "1" ? "#FFF" : "#000", paddingVertical: 15, textAlign: "center",
                            borderTopLeftRadius: 10, borderBottomLeftRadius: 10
                        }}>{"Pending"}</Text>
                    <View style={{ width: .5, height: "100%", backgroundColor: "black" }}></View>
                    <Text onPress={() => setSelectedType("2")}
                        style={{ flex: 1, backgroundColor: SelectedType == "2" ? "#27DF52" : "#f2f2f2", color: SelectedType == "2" ? "#FFF" : "#000", paddingVertical: 15, textAlign: "center", }}>{"Past"}</Text>
                    <View style={{ width: .5, height: "100%", backgroundColor: "black" }}></View>
                    <Text onPress={() => setSelectedType("3")}
                        style={{ flex: 1, backgroundColor: SelectedType == "3" ? "#27DF52" : "#f2f2f2", color: SelectedType == "3" ? "#FFF" : "#000", paddingVertical: 15, textAlign: "center", }}>{"Cancelled"}</Text>
                    <View style={{ width: .5, height: "100%", backgroundColor: "black" }}></View>
                    <Text onPress={() => setSelectedType("4")}
                        style={{
                            flex: 1, backgroundColor: SelectedType == "4" ? "#27DF52" : "#f2f2f2", color: SelectedType == "4" ? "#FFF" : "#000", paddingVertical: 15, textAlign: "center",
                            borderTopRightRadius: 10, borderBottomRightRadius: 10
                        }}>{"Requests"}</Text>
                </View>
                {SelectedType == "1" &&
                <PendingCard />}
                {SelectedType == "2" &&
                <PastCard />}
                {SelectedType == "3" &&
                <CancelledCard />}

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