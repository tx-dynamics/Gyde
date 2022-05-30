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
import LogInWithComponent from '../Componenets/LogInWithComponent';

const PersonalDetails2 = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.MainView}>
      <ScrollView>
        <View style={styles.InnerView}>
          <View style={{paddingVertical: '3%'}}>
            <HeaderComp TEXT={'Personal Details'} />
          </View>
          <InputHeader TEXT={'Username'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Sushan'} AUTOFOCUS={true} />
          </View>

          <InputHeader TEXT={'Email'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'srisushan.dangol@gmail.com'} />
          </View>

          <InputHeader TEXT={'Create Password'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Password'} />
          </View>

          <InputHeader TEXT={'Re-enter Password'} />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Password'} />
          </View>

          <View style={styles.BtnDimensions}>
            <ButtonComponent
              TEXT="Email varification"
              // STYLE={{marginVertical: '10%'}}
            />
          </View>

          <View style={[styles.LogInWithContainerStyle, {marginTop: '20%'}]}>
            <View style={{width: '17%'}}>
              <LogInWithComponent
                ICON={require('../Icons/awesome-twitter.png')}
              />
            </View>
            <View style={{width: '17%'}}>
              <LogInWithComponent ICON={require('../Icons/Fb-icon.png')} />
            </View>
            <View style={{width: '17%'}}>
              <LogInWithComponent ICON={require('../Icons/In-icon.png')} />
            </View>
            <View style={{width: '17%'}}>
              <LogInWithComponent ICON={require('../Icons/Group12999.png')} />
            </View>
          </View>

          <View style={[styles.LogInWithContainerStyle, {width: '50%'}]}>
            <View style={{width: '33%'}}>
              <LogInWithComponent ICON={require('../Icons/Group328.png')} />
            </View>
            <View style={{width: '33%'}}>
              <LogInWithComponent ICON={require('../Icons/Group315.png')} />
            </View>
          </View>

          <View style={styles.BtnDimensions}>
            <ButtonComponent
              TEXT="Continue"
              navigation={navigation}
              ToScreen="PaymentInfo"
              // STYLE={{marginVertical: '10%'}}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PersonalDetails2;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
  InnerView: {
    width: '86%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: '50%',
    marginTop: '5%',
  },

  EachContainer: {height: '7.75%'},

  BtnDimensions: {
    height: '7%',
    width: '85%',
    alignSelf: 'center',
    marginVertical: '11%',
  },

  LogInWithContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '7%',
    height: '7.5%',
  },
});
