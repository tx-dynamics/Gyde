import {
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import React from 'react';
import InputComponent from '../Componenets/InputComponent';
import HeaderComp from '../Componenets/HeaderComp';
import InputHeader from '../Componenets/InputHeader';
import ButtonComponent from '../Componenets/ButtonComponent';

const SubjectInfo = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.MainScreen}>
      <ScrollView>
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

          <InputHeader TEXT={'Subject expereince'} />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'15 years'}
              ICON={require('../Icons/ionic-ios-arrow-down.png')}
            />
          </View>

          <InputHeader TEXT={'Preferred learner age'} />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'15-30 years'}
              ICON={require('../Icons/ionic-ios-arrow-down.png')}
            />
          </View>

          <InputHeader TEXT={'Preferred learner level'} />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'Graduate'}
              ICON={require('../Icons/ionic-ios-arrow-down.png')}
            />
          </View>

          <InputHeader TEXT={'Personal statement'} />
          <View style={{height: '15%'}}>
            <InputComponent PLACEHOLDER={'Ener Max 120 characters'} MAX={120} />
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
      </ScrollView>
    </KeyboardAvoidingView>
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

export default SubjectInfo;
