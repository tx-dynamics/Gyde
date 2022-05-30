import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import InputComponent from '../Componenets/InputComponent';
import LogInWithComponent from '../Componenets/LogInWithComponent';
import ButtonComponent from '../Componenets/ButtonComponent';

const LogIn = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.MainScreenStyle}>
      <ScrollView>
        <View>
          <Image
            style={{top: -39.54, left: -80.69, zIndex: 0}}
            source={require('../Icons/home-ellipse1.png')}
          />

          <Image
            style={{position: 'absolute', top: -48, left: -81, zIndex: 1}}
            source={require('../Icons/home-ellipse2.png')}
          />

          <Image
            style={{position: 'absolute', top: -108, left: 176, zIndex: 0}}
            source={require('../Icons/home-ellipse3.png')}
          />

          <Image
            style={{
              position: 'absolute',
              top: 95.85,
              alignSelf: 'center',
              zIndex: 1,
            }}
            source={require('../Icons/Gyde-text.png')}
          />
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 30,
              alignSelf: 'center',
              position: 'absolute',
              top: 188,
              zIndex: 1,
            }}>
            Welcome back
          </Text>
        </View>

        <View style={styles.dimentionStyle}>
          <Text style={styles.MainTextStyle}>Login</Text>
          {/* FISRT USERNAME COMPONENT */}
          <View style={styles.InputcontainerView}>
            <InputComponent
              PLACEHOLDER="Username"
              STYLE={{borderRadius: 25}}
              ICON={require('../Icons/username-icon.png')}
            />
          </View>

          <View style={styles.InputcontainerView}>
            <InputComponent
              PLACEHOLDER="Password"
              STYLE={{borderRadius: 25}}
              ICON={require('../Icons/password-icon.png')}
            />
          </View>

          <TouchableOpacity style={styles.textBtn}>
            <Text style={{color: '#0D7CFF', fontSize: 14}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <View style={styles.BtnDimensions}>
            <ButtonComponent
              STYLE={{backgroundColor: '#1DBF73'}}
              TEXT={'Login'}
              navigation={navigation}
              ToScreen="AccountSetup"
            />
          </View>

          <Text
            style={{
              color: '#755139',
              fontSize: 14,
              alignSelf: 'center',
              margin: '8.5%',
            }}>
            or login with
          </Text>

          <View style={styles.LogInWithContainerStyle}>
            <View style={{width: '25%'}}>
              <LogInWithComponent ICON={require('../Icons/Google-icon.png')} />
            </View>
            <View style={{width: '25%'}}>
              <LogInWithComponent ICON={require('../Icons/Fb-icon.png')} />
            </View>
            <View style={{width: '25%'}}>
              <LogInWithComponent ICON={require('../Icons/In-icon.png')} />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  MainScreenStyle: {
    // backgroundColor: 'white',
    flex: 1,
  },

  InputcontainerView: {
    height: '8%',
    width: '100%',
    marginVertical: '3%',
  },

  textBtn: {
    height: '5%',
    alignItems: 'flex-end',
  },

  dimentionStyle: {
    height: '100%',
    width: '85%',
    paddingBottom: '25%',
    alignSelf: 'center',
  },

  MainTextStyle: {
    color: '#1DBF73',
    fontSize: 30,
    marginBottom: 26,
    marginTop: '-6%',
    fontWeight: 'bold',
  },

  LogInWithContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: '70%',
    height: '8.5%',
  },

  BtnDimensions: {
    width: '73%',
    alignSelf: 'center',
    height: '8%',
  },
});

export default LogIn;
