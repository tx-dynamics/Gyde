import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, Pressable, ScrollView, TextInput } from 'react-native'

import HeaderComp from '../Componenets/HeaderComp';
import { wp } from '../Helpers/Responsiveness';

const DATA = [
    { id: 1, myMsg: false }, { id: 2, myMsg: true }
]

export default function ChatScreen(props) {
    return (
        <View style={styles.container}>
            <View style={{ width: '85%', marginVertical: '5%', alignSelf: 'center' }}>
                <HeaderComp TEXT="Mode" />
            </View>
            <Text style={{ fontWeight: 'bold', color: '#a1a1a1', fontSize: 17, alignSelf: "center", marginBottom: 20 }}>{"Mon, 4may"}</Text>

            <FlatList
                data={DATA}
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <>
                        {item.myMsg ?
                            <View style={{ alignSelf: "flex-end", maxWidth: wp(60), marginHorizontal: wp(5), marginTop: wp(3) }}>
                                <View style={[styles.boxWithShadow, { padding: 12, borderRadius: 10 }]}>
                                    <Text style={{ fontWeight: 'bold', color: '#a1a1a1', fontSize: 17 }}>{"I am sorry, i am not interested "}</Text>
                                </View>
                                <Text style={{ fontWeight: 'bold', color: '#a1a1a1', fontSize: 17, marginTop: wp(1.5), alignSelf: "center" }}>{"2.23   Jhon"}</Text>
                            </View>
                            :
                            <View style={{ alignSelf: "flex-start", maxWidth: wp(60), marginHorizontal: wp(5), marginTop: wp(3) }}>
                                <View style={[styles.boxWithShadow, { padding: 12, borderRadius: 10 }]}>
                                    <Text style={{ fontWeight: 'bold', color: '#a1a1a1', fontSize: 17 }}>{"Hi marry i see that you have tried to book the class, let me know "}</Text>
                                </View>
                                <Text style={{ fontWeight: 'bold', color: '#a1a1a1', fontSize: 17, marginTop: wp(1.5), alignSelf: "center" }}>{"2.23   Jhon"}</Text>
                            </View>

                        }
                    </>
                )} />

            <View style={{ flexDirection: "row" }}>
                <TextInput style={{ backgroundColor: "#d3d3d3", flex: .8, paddingLeft:10, color:"#000",
                fontSize:16, fontWeight:"bold" }}
                    placeholder={"Your Message"}/>
                <Pressable style={{ backgroundColor: "#27DF52", flex: .2, paddingVertical: 13, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>{"Send"}</Text>
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