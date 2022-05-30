import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import HeaderComp from '../Componenets/HeaderComp';
import InputHeader from '../Componenets/InputHeader';
import RequestTable from '../Componenets/RequestTable';
import ButtonComponent from '../Componenets/ButtonComponent';
import NoteCard from '../Componenets/NoteCard';

const Varification = ({navigation}) => {
  return (
    <View style={styles.MainView}>
      <View style={{marginTop: '3%', width: '85%', alignSelf: 'center'}}>
        <HeaderComp TEXT={'Varifications'} />
      </View>
      <View style={styles.innerView}>
        <View
          style={{
            marginTop: '9%',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <InputHeader TEXT={'Background Verification'} />
          <Image
            style={{marginLeft: '2%'}}
            source={require('../Icons/material-verified-user.png')}
          />
        </View>

        <RequestTable />

        <View
          style={{
            marginBottom: '6%',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-end',
          }}>
          <Text style={{color: 'grey'}}>Expertise Verification</Text>
          <Image
            style={{marginLeft: '2%'}}
            source={require('../Icons/material-verified-user.png')}
          />
        </View>

        <View
          style={{
            height: '7.5%',
            paddingHorizontal: '12%',
            marginVertical: '5%',
          }}>
          <ButtonComponent
            TEXT={'Request'}
            navigation={navigation}
            ToScreen="PersonalDetails2"
          />
        </View>

        <Text
          style={{
            color: 'black',
            fontSize: 17,
            marginBottom: '3%',
            fontWeight: 'bold',
          }}>
          Note:
        </Text>

        <NoteCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
  innerView: {
    width: '85%',
    marginTop: '3%',
    alignSelf: 'center',
    // alignItems: 'center',
  },
});

export default Varification;
