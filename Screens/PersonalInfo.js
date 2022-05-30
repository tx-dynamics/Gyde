import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React from 'react';
import InputHeader from '../Componenets/InputHeader';
import ButtonComponent from '../Componenets/ButtonComponent';
import InputComponent from '../Componenets/InputComponent';
import HeaderComp from '../Componenets/HeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PersonalInfo = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.MainView}>
      <ScrollView>
        <View style={styles.InnerView}>
          <View style={{paddingVertical: '3%'}}>
            <HeaderComp
              navigation={navigation}
              TEXT={'Personal Information'}
              ICON={require('../Icons/awesome-edit.png')}
            />
          </View>
          <InputHeader TEXT={'Firstname'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Sushan'} AUTOFOCUS={true} />
          </View>

          <InputHeader TEXT={'Middle name'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Raj'} />
          </View>

          <InputHeader TEXT={'Last name'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Dangol'} />
          </View>

          <InputHeader TEXT={'Username'} />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'Srisushanraj'}
              ICON={require('../Icons/ionic-ios-arrow-down.png')}
            />
          </View>

          <InputHeader TEXT={'Email'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'srisushan.dangol@gmail.com'} />
          </View>

          <InputHeader TEXT={'Password'} />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'Expert'}
              ICON={require('../Icons/ionic-ios-arrow-down.png')}
            />
          </View>

          <InputHeader TEXT={'Nationality'} />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'Expert'}
              ICON={require('../Icons/ionic-ios-arrow-down.png')}
            />
          </View>

          <InputHeader TEXT={'Residense'} />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'Use Device Location'}
              ICON={require('../Icons/material-my-location.png')}
            />
          </View>

          <InputHeader TEXT={'Phone'} />
          <View style={styles.PhnMobCompStyles}>
            <View style={{width: '60%'}}>
              <InputComponent PLACEHOLDER={'+9779860584998'} />
            </View>

            <View style={{width: '35%'}}>
              <InputComponent PLACEHOLDER={'Mobile'} />
            </View>
          </View>

          <InputHeader TEXT={'Mailing Address'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Use Device Location'} />
          </View>

          <InputHeader TEXT={'Time Zone'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Use Device Location'} />
          </View>

          <InputHeader TEXT={'Currency'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Use Device Location'} />
          </View>

          <InputHeader TEXT={'Learning age'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Use Device Location'} />
          </View>

          <InputHeader TEXT={'Tearing Subjects'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Use Device Location'} />
          </View>

          <View style={styles.BtnDimensions}>
            <ButtonComponent
              TEXT="Continue"
              STYLE={{marginVertical: 30}}
              navigation={navigation}
              ToScreen="PersonalDetails"
            />
          </View>
        </View>
        <View
          style={{
            width: wp('100%'),
            height: '30%',
            backgroundColor: 'red',
          }}></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  MainView: {
    height: '100%',
    width: '100%',
  },
  InnerView: {
    width: '85%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: '120%',
    marginTop: '5%',
  },

  EachContainer: {height: '5%'},

  BtnDimensions: {
    height: '4.5%',
    width: '70%',
    alignSelf: 'center',
  },
  PhnMobCompStyles: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    height: '5%',
    marginBottom: 15,
  },
});
