import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderComp from '../Componenets/HeaderComp';
import HeaderForCardSetup from '../Componenets/HeaderForCardSetup';
import InputComponent from '../Componenets/InputComponent';
import ButtonComponent from '../Componenets/ButtonComponent';

const BankDetails = () => {
  return (
    <View style={styles.MainView}>
      <View
        style={{
          marginVertical: '5%',
          width: '85%',
          alignSelf: 'center',
        }}>
        <HeaderComp TEXT={'Bank Details'} />
      </View>
      <View style={styles.InnerContainer}>
        <HeaderForCardSetup STYLE={styles.marginHeader} TEXT={'Type'} />
        <View style={styles.EachContainer}>
          <InputComponent
            PLACEHOLDER={'Saving'}
            STYLE={styles.InputCompStyle}
            ICON={require('../Icons/ionic-ios-arrow-down.png')}
          />
        </View>

        <HeaderForCardSetup
          STYLE={styles.marginHeader}
          TEXT={'Routing number'}
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
          TEXT={'Re-enter Account number'}
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
          TEXT={'Account Holder Name'}
        />
        <View style={styles.EachContainer}>
          <InputComponent
            PLACEHOLDER={'Sushan Dangol'}
            STYLE={styles.InputCompStyle}
          />
        </View>

        <HeaderForCardSetup
          STYLE={styles.marginHeader}
          TEXT={'Account Nick Name'}
        />
        <View style={styles.EachContainer}>
          <InputComponent
            PLACEHOLDER={'Sushan Dangol'}
            STYLE={styles.InputCompStyle}
          />
        </View>

        <HeaderForCardSetup
          STYLE={styles.marginHeader}
          TEXT={'Billing Address'}
        />
        <View style={styles.EachContainer}>
          <InputComponent
            PLACEHOLDER={'Use my location'}
            STYLE={styles.InputCompStyle}
            ICON={require('../Icons/material-my-location.png')}
          />
        </View>
        <Text
          style={{
            color: '#27DF52',
            fontWeight: 'bold',
            fontSize: 25,
          }}>
          +
          <Text style={{color: 'black', fontWeight: 'normal', fontSize: 14}}>
            {' '}
            Add location
          </Text>
        </Text>

        <View style={styles.BtnDimensions}>
          <ButtonComponent TEXT={'Continue'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
  InnerContainer: {
    //   height:'100%'
    width: '80%',
    // backgroundColor: 'yellow',
    alignSelf: 'center',
  },
  EachContainer: {height: '6.5%'},
  InputCompStyle: {
    elevation: 0,
    borderWidth: 1,
    borderColor: '#707070',
  },
  marginHeader: {marginVertical: '5%'},
  BtnDimensions: {
    height: '6.5%',
    width: '80%',
    alignSelf: 'center',
    marginTop: '6%',
    marginVertical: '5%',
  },
});

export default BankDetails;
