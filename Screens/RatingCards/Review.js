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

export default function Review(props) {
    return (
        <FlatList
            data={DATA}
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <View style={[styles.boxWithShadow, { width: wp(90), alignSelf: "center", paddingHorizontal: 10, paddingVertical: 15, marginTop: wp(4), paddingBottom: 20 }]}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={iconPath.Girl_Image} style={{ width: wp(12), height: wp(18), resizeMode: "contain" }} />
                        <View style={{ marginLeft: 13, width: "82%" }}>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                <Text numberOfLines={1} style={{ fontWeight: 'bold', color: 'black', fontSize: 17, maxWidth: wp(65), marginRight: 10, }}>{"Sarah Lee"}</Text>
                                <Stars
                                    count={5}
                                    disabled
                                    default={5}
                                    fullStar={<Icon name={'star'} size={20} color={"#FFC107"} />}
                                    emptyStar={<Icon name={'star-outline'} size={20} color={"#000"} />}

                                />
                            </View>
                            <Text style={{ color: 'gray', fontSize: 17, maxWidth: wp(65), marginTop: 1, }}>{"Greate Communication! A very quick learner!"}</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                                <Text style={{ color: '#27DF52', fontSize: 17, maxWidth: wp(65) }}>{"C++"}</Text>
                                <Text style={{ color: '#D3D3D3', fontSize: 16, maxWidth: wp(65), alignSelf: "flex-end", }}>{`${moment(new Date()).format('MMM DD, YYYY hh:mm A')}`}</Text>
                            </View>

                        </View>
                    </View>
                </View>
            )} />
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