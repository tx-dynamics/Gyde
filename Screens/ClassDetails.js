import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputHeader from '../Componenets/InputHeader';
import InputComponent from '../Componenets/InputComponent';
import HeaderComp from '../Componenets/HeaderComp';

const ClassDetails = () => {
  return (
    <View style={styles.MainView}>
      <View style={styles.InnerView}>
        <View style={{marginBottom: '8%'}}>
          <HeaderComp TEXT={'Subject Info'} />
        </View>
        <InputHeader TEXT={'Subject'} />
        <View style={styles.EachContainer}>
          <InputComponent
            PLACEHOLDER={'Baking cakes advanced'}
            AUTOFOCUS={true}
          />
        </View>

        <InputHeader TEXT={'Others'} />
        <View style={styles.EachContainer}>
          <InputComponent PLACEHOLDER={'Specify here'} />
        </View>

        <InputHeader TEXT={'Your rate'} />
        <View style={styles.EachContainer}>
          <InputComponent PLACEHOLDER={'$15 per hour'} />
        </View>

        <InputHeader TEXT={"Learner's rate"} />
        <View style={styles.EachContainer}>
          <InputComponent
            PLACEHOLDER={'&15 per hour'}
            ICON={require('../Icons/ionic-ios-arrow-down.png')}
          />
        </View>

        <InputHeader TEXT={'Maximum rate'} />
        <View style={styles.EachContainer}>
          <InputComponent PLACEHOLDER={'$15 per hour'} />
        </View>

        <InputHeader TEXT={'Expertise level'} />
        <View style={styles.EachContainer}>
          <InputComponent
            PLACEHOLDER={'Expert'}
            ICON={require('../Icons/ionic-ios-arrow-down.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainScreen: {
    flex: 1,
    paddingVertical: '5%',
    // justifyContent: 'space-between',
  },
  EachContainer: {height: '6.5%'},
  BtnDimensions: {
    height: '5.5%',
    width: '70%',
    alignSelf: 'center',
  },
  InnerView: {
    width: '90%',
    height: '100%',
    paddingBottom: '80%',
    alignSelf: 'center',
  },
});

export default ClassDetails;
