import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native'

import HeaderComp from '../Componenets/HeaderComp';
import InputHeader from '../Componenets/InputHeader';
import { iconPath } from '../Constants/icon';
import { wp, hp } from '../Helpers/Responsiveness';
import moment from 'moment';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
    { id: 1, rating: false }, { id: 2, rating: true }, { id: 3, rating: true }
]

export default function Requests(props) {
    return (
        <View style={styles.container}>
            <View style={{ width: '85%', marginVertical: '5%', alignSelf: 'center' }}>
                <HeaderComp TEXT="Blast Requests" />
            </View>

            <FlatList
                data={DATA}
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={[styles.boxWithShadow, { width: wp(90), alignSelf: "center", paddingHorizontal: 10, paddingVertical: 15, height: wp(44), marginTop: wp(4) }]}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={iconPath.Girl_Image} style={{ width: wp(12), height: wp(18), resizeMode: "contain" }} />
                            <View style={{ marginLeft: 13, width: "82%" }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text numberOfLines={1} style={{ fontWeight: 'bold', color: 'black', fontSize: 17, maxWidth: wp(65) }}>{"Sarah Lee"}</Text>
                                    <Image source={iconPath.saveIcon} style={{ width: wp(5), height: wp(5), resizeMode: "contain" }} />
                                </View>
                                <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                    <View style={{ alignItems: "flex-start" }}>
                                        {item.rating &&
                                            <Stars
                                                count={5}
                                                disabled
                                                default={5}
                                                fullStar={<Icon name={'star'} size={20} color={"#FFC107"} />}
                                                emptyStar={<Icon name={'star-outline'} size={20} color={"#000"} />}

                                            />}
                                        <Text style={{ color: 'gray', fontSize: 17, maxWidth: wp(65), marginTop: 10, }}>{"Greate Communication! A very quick learner!"}</Text>
                                    </View>
                                    <Text style={{ color: 'blue', fontSize: 17, maxWidth: wp(65) }}>{"C++"}</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ color: '#D3D3D3', fontSize: 16, maxWidth: wp(65), alignSelf: "flex-end", marginTop: 15 }}>{`${moment(new Date()).format('MMM DD, YYYY hh:mm A')}`}</Text>
                    </View>
                )} />

                <Pressable style={{position:"absolute", bottom:wp(15), right:wp(5)}}>
                    <Image source={iconPath.greenFloating} style={{width:wp(19), height:wp(19), resizeMode:"contain"}}/>
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
        elevation: 2,
        backgroundColor: "#fff"
    }
})