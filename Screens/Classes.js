import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, Pressable, ScrollView, TextInput } from 'react-native'

import HeaderComp from '../Componenets/HeaderComp';
import InputHeader from '../Componenets/InputHeader';
import { iconPath } from '../Constants/icon';
import { wp, hp } from '../Helpers/Responsiveness';
import moment from 'moment';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

const DATA = [
    { id: 1, rating: false }, { id: 2, rating: true }, { id: 3, rating: true }
]

export default function Requests(props) {
    return (
        <View style={styles.container}>
            <View style={{ width: '85%', marginVertical: '5%', alignSelf: 'center' }}>
                <HeaderComp TEXT="Classes" />
            </View>
            <ScrollView style={{ paddingHorizontal: 15 }} contentContainerStyle={{ paddingBottom: 50 }}>

                <View style={[styles.boxWithShadow, {
                    width: wp(90), alignSelf: "center", marginTop: wp(4),
                    borderRadius: 20, borderColor: "blue", borderWidth: .5
                }]}>
                    <View style={{
                        backgroundColor: "#27DF52", width: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20,
                        alignItems: "center", justifyContent: "center", paddingVertical: 13
                    }}>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17, maxWidth: wp(65) }}>{"Blast Request"}</Text>
                    </View>

                    <Text style={{ color: 'black', fontSize: 14, maxWidth: wp(65), marginHorizontal: 10, marginTop: 10, marginBottom: 35 }}>{"hi,\nHow are you ? My name is marry\ni'm IT developer but have been looking skill i want to learn C++\nThank You"}</Text>
                </View>

                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17, maxWidth: wp(65), marginVertical: 18 }}>{"Price Range"}</Text>

                <View style={[styles.boxWithShadow, {
                    paddingVertical: 6, borderRadius: 10, flexDirection: "row",
                    justifyContent: "space-between", alignItems: "center"
                }]}>
                    <Slider
                        style={{ flex: 1, height: 40 }}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#27DF52"
                        maximumTrackTintColor="#000000"
                        thumbTintColor="#27DF52"
                    />
                    <Text style={{ color: 'black', fontSize: 14, marginRight: 7 }}>{"1$-1000"}</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 18 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', flex: .7 }}>{"Subject"}</Text>
                    <Text style={{ color: 'black', fontSize: 15, flex: .3, height: 35, }}>{"C++"}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 18 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', flex: .7 }}>{"No. Classes"}</Text>
                    <TextInput style={[styles.boxWithShadow, { flex: .3, height: 35, textAlignVertical: "center" }]} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 18 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', flex: .7 }}>{"Classes Mode"}</Text>
                    <TextInput style={[styles.boxWithShadow, { flex: .3, height: 35, textAlignVertical: "center" }]} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 18 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', flex: .7 }}>{"Profoced meeting price"}</Text>
                    <TextInput style={[styles.boxWithShadow, { flex: .3, height: 35, textAlignVertical: "center" }]} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 18 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', flex: .7 }}>{"Class Size"}</Text>
                    <TextInput style={[styles.boxWithShadow, { flex: .3, height: 35, textAlignVertical: "center" }]} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 18 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', flex: .7 }}>{"Expected Date"}</Text>
                    <TextInput style={[styles.boxWithShadow, { flex: .3, height: 35, textAlignVertical: "center" }]} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 18 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', flex: .7 }}>{"Expected Time"}</Text>
                    <TextInput style={[styles.boxWithShadow, { flex: .3, height: 35, textAlignVertical: "center" }]} />
                </View>

                <View style={{ flexDirection: "row", paddingHorizontal: wp(8), marginTop: wp(10) }}>
                    <Pressable style={{ backgroundColor: "red", flex: 1, paddingVertical: 13, alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>{"Cancel"}</Text>
                    </Pressable>
                    <Pressable style={{ backgroundColor: "#27DF52", flex: 1, paddingVertical: 13, alignItems: "center", justifyContent: "center", borderRadius: 10, marginLeft: 15 }}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>{"Accept"}</Text>
                    </Pressable>

                </View>



            </ScrollView>
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