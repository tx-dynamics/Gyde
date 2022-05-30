import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  View,
} from 'react-native';
import React from 'react';
import HeaderComp from '../Componenets/HeaderComp';
import InputComponent from '../Componenets/InputComponent';
import InputHeader from '../Componenets/InputHeader';
import InputCompCardDetail from '../Componenets/InputCompCardDetail';
import HeaderForCardSetup from '../Componenets/HeaderForCardSetup';
import ButtonComponent from '../Componenets/ButtonComponent';
const CardSetup = () => {
  return (
    <KeyboardAvoidingView style={styles.MainView}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <View style={{marginVertical: '6%'}}>
            <HeaderComp TEXT={'Card Setup'} />
          </View>
          <View style={styles.VisaStyle}>
            <Image
              style={{
                height: '100%',
                width: '80%',
              }}
              resizeMode={'contain'}
              source={require('../Icons/Visa.png')}
            />

            <Image
              resizeMode={'contain'}
              source={require('../Icons/ionic-ios-arrow-down.png')}
            />
          </View>
          <HeaderForCardSetup STYLE={styles.marginHeader} TEXT={'Type'} />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'Sushan'}
              STYLE={styles.InputCompStyle}
              ICON={require('../Icons/ionic-ios-arrow-down.png')}
            />
          </View>

          <HeaderForCardSetup
            STYLE={styles.marginHeader}
            TEXT={'Card number'}
          />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'1111  2222  3333  0113'}
              MAX={16}
              STYLE={styles.InputCompStyle}
            />
          </View>

          <HeaderForCardSetup
            STYLE={styles.marginHeader}
            TEXT={'Re-enter card number'}
          />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'1111  2222  3333  0113'}
              MAX={16}
              STYLE={styles.InputCompStyle}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              height: '18%',
              justifyContent: 'space-between',
              marginBottom: '4%',
              // borderWidth: 1,
              alignItems: 'center',
            }}>
            <View style={{height: '50%', width: '40%'}}>
              <HeaderForCardSetup TEXT={'CVC'} />
              <InputComponent
                PLACEHOLDER={'888'}
                MAX={3}
                STYLE={styles.InputCompStyle}
              />
            </View>
            {/* style={{flexDirection: 'column', height: '80%', width: '40%'}} */}
            <View style={{height: '50%', width: '40%'}}>
              <HeaderForCardSetup TEXT={'EXPIRY'} />
              <InputComponent
                PLACEHOLDER={'11/21'}
                MAX={5}
                STYLE={styles.InputCompStyle}
              />
            </View>
          </View>

          <HeaderForCardSetup
            STYLE={styles.marginHeader}
            TEXT={'Card Holder Name'}
          />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'Sushan Dangol'}
              STYLE={styles.InputCompStyle}
            />
          </View>

          <View style={styles.BtnDimensions}>
            <ButtonComponent TEXT={'Save'} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CardSetup;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    // backgroundColor: 'red',
    // padding: '8%',
  },
  innerContainer: {
    width: '78%',
    height: '100%',
    alignSelf: 'center',
    // alignItems: 'center',
    // backgroundColor: 'yellow',
    paddingBottom: '60%',
  },
  EachContainer: {
    height: '9%',
  },
  InputCompStyle: {
    elevation: 0,
    borderWidth: 1,
    borderColor: '#707070',
  },
  VisaStyle: {
    // paddingVertical: '2%',
    borderWidth: 1,
    borderColor: '#707070',
    width: '30%',
    borderRadius: 5,
    height: '8%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '1.5%',
    alignItems: 'center',
    marginVertical: '5%',
  },
  marginHeader: {marginVertical: '5%'},
  BtnDimensions: {
    height: '8.5%',
    width: '80%',
    alignSelf: 'center',
    marginTop: '6%',
    marginVertical: '5%',
  },
});
