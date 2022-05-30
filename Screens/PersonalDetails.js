import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import HeaderComp from '../Componenets/HeaderComp';
import InputHeader from '../Componenets/InputHeader';
import InputComponent from '../Componenets/InputComponent';
import ButtonComponent from '../Componenets/ButtonComponent';

const PersonalDetails = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.MainView}>
      <ScrollView>
        <View style={styles.InnerView}>
          <View style={{paddingVertical: '3%'}}>
            <HeaderComp TEXT={'Personal Details'} />
          </View>
          <InputHeader TEXT={'Firstname'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Sushan'} />
          </View>

          <InputHeader TEXT={'Middle name'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Raj'} />
          </View>

          <InputHeader TEXT={'Last name'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Dangol'} />
          </View>

          <InputHeader TEXT={'Nationality'} />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'Expert'}
              ICON={require('../Icons/ionic-ios-arrow-down.png')}
            />
          </View>

          <InputHeader TEXT={'Residence'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'srisushan.dangol@gmail.com'} />
          </View>

          <InputHeader TEXT={'Mailing Address'} />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'Expert'}
              ICON={require('../Icons/ionic-ios-arrow-down.png')}
            />
          </View>

          <InputHeader TEXT={'Time Zone'} />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'Expert'}
              ICON={require('../Icons/ionic-ios-arrow-down.png')}
            />
          </View>

          <InputHeader TEXT={'Local Currency'} />
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

          <InputHeader TEXT={'Work Authorization ID'} />
          <View style={styles.WorkAuthId}>
            <View style={{width: '30%'}}>
              <InputComponent
                PLACEHOLDER={'Type'}
                ICON={require('../Icons/ionic-ios-arrow-down.png')}
              />
            </View>

            <View style={{width: '30%'}}>
              <InputComponent
                PLACEHOLDER={'ID'}
                ICON={require('../Icons/ionic-ios-arrow-down.png')}
              />
            </View>

            <View style={{width: '30%'}}>
              <InputComponent
                PLACEHOLDER={'Expiry'}
                ICON={require('../Icons/ionic-ios-arrow-down.png')}
              />
            </View>
          </View>
          {/* 
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
 */}
          <View style={styles.BtnDimensions}>
            <ButtonComponent
              TEXT="Continue"
              navigation={navigation}
              ToScreen="Varification"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  MainView: {
    // height: '200%',
    // width: '100%',
    flex: 1,
  },
  InnerView: {
    width: '85%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: '90%',
    marginTop: '5%',
  },

  EachContainer: {height: '6.5%'},

  BtnDimensions: {
    height: '6%',
    width: '70%',
    marginTop: '8%',
    alignSelf: 'center',
  },
  PhnMobCompStyles: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    height: '6.5%',
    marginBottom: '3.5%',
  },
  WorkAuthId: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    height: '6.5%',
    marginBottom: '4%',
  },
});
