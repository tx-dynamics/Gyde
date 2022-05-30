import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  View,
} from 'react-native';
import React from 'react';
import HeaderComp from '../Componenets/HeaderComp';
import InputHeader from '../Componenets/InputHeader';
import InputComponent from '../Componenets/InputComponent';
import ButtonComponent from '../Componenets/ButtonComponent';

const SubjectInfo2 = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.MainView}>
      <ScrollView>
        <View style={{width: '85%', marginBottom: '5%', alignSelf: 'center'}}>
          <HeaderComp TEXT="Subject Info" />
        </View>
        <View style={styles.InnerView}>
          <InputHeader TEXT="Language" />
          <View style={styles.singleRowView}>
            <View
              style={{
                width: '70%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{width: '45%'}}>
                <InputComponent
                  PLACEHOLDER={'English'}
                  ICON={require('../Icons/ionic-ios-arrow-down.png')}
                />
              </View>
              <View style={{width: '45%'}}>
                <InputComponent
                  PLACEHOLDER={'Expert'}
                  ICON={require('../Icons/ionic-ios-arrow-down.png')}
                />
              </View>
            </View>
            <View
              style={{
                width: '25%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={{height: '57%', width: '38%'}}
                resizeMode="contain"
                source={require('../Icons/Group12988.png')}
              />
              <Image
                style={{height: '57%', width: '38%'}}
                resizeMode="contain"
                source={require('../Icons/awesome-plus-circle.png')}
              />
            </View>
          </View>
          {/*  */}
          <InputHeader TEXT="Relevent Certification" />
          <View style={styles.EachContainer}>
            <InputComponent PLACEHOLDER={'Diploma in 3D Animation and VFX'} />
          </View>
          <View style={styles.singleRowView}>
            <View
              style={{
                width: '60%',
                flexDirection: 'row',

                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{width: '45%'}}>
                <InputComponent
                  PLACEHOLDER={'Maya Animation'}
                  ICON={require('../Icons/ionic-ios-arrow-down.png')}
                />
              </View>
              <View style={{width: '45%'}}>
                <InputComponent
                  PLACEHOLDER={'Expert'}
                  ICON={require('../Icons/ionic-ios-arrow-down.png')}
                />
              </View>
            </View>
            <View
              style={{
                width: '25%',
                flexDirection: 'row',

                justifyContent: 'space-between',
                alignItems: 'center',
                //   alignSelf:'flex-end'
              }}>
              <Image
                style={{height: '57%', width: '38%'}}
                resizeMode="contain"
                source={require('../Icons/Group12988.png')}
              />
              <Image
                style={{height: '57%', width: '38%'}}
                resizeMode="contain"
                source={require('../Icons/awesome-plus-circle.png')}
              />
            </View>
          </View>
          {/*  */}
          <InputHeader TEXT="Acadamic qualification" />
          <View style={styles.EachContainer}>
            <InputComponent
              PLACEHOLDER={'Bachelors of Bussiness Administration'}
            />
          </View>
          <View style={styles.singleRowView}>
            <View
              style={{
                width: '60%',
                flexDirection: 'row',

                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{width: '45%'}}>
                <InputComponent
                  PLACEHOLDER={'Pokhara University'}
                  ICON={require('../Icons/ionic-ios-arrow-down.png')}
                />
              </View>
              <View style={{width: '45%'}}>
                <InputComponent
                  PLACEHOLDER={'2017'}
                  ICON={require('../Icons/ionic-ios-arrow-down.png')}
                />
              </View>
            </View>
            <View
              style={{
                width: '25%',
                flexDirection: 'row',

                justifyContent: 'space-between',
                alignItems: 'center',
                //   alignSelf:'flex-end'
              }}>
              <Image
                style={{height: '57%', width: '38%'}}
                resizeMode="contain"
                source={require('../Icons/Group12988.png')}
              />
              <Image
                style={{height: '57%', width: '38%'}}
                resizeMode="contain"
                source={require('../Icons/awesome-plus-circle.png')}
              />
            </View>
          </View>
          {/*  */}
          <InputHeader TEXT="Persnal Statement" />
          <View style={{height: '25%'}}>
            <InputComponent
              PLACEHOLDER={'Enter Max 120 characters'}
              MAX={120}
            />
          </View>
          {/*  */}
          <View style={styles.BtnDimensions}>
            <ButtonComponent
              TEXT="Continue"
              //   STYLE={{marginVertical: 30}}
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
  MainView: {
    flex: 1,
    paddingVertical: '4%',
  },
  InnerView: {
    width: '89%',
    height: '100%',
    paddingBottom: '50%',
    alignSelf: 'center',
  },
  EachContainer: {height: '11%', marginBottom: '6%'},
  singleRowView: {
    flexDirection: 'row',
    height: '8%',
    justifyContent: 'space-between',
    marginBottom: '3%',
  },
  BtnDimensions: {
    height: '9%',
    marginVertical: '7%',
    width: '70%',
    alignSelf: 'center',
  },
});

export default SubjectInfo2;
