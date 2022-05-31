import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LogIn from './Screens/LogIn';
import AccountSetup from './Screens/AccountSetup';
import PersonalInfo from './Screens/PersonalInfo';
import PersonalDetails from './Screens/PersonalDetails';
import PersonalDetails2 from './Screens/PersonalDetails2';
import RequestTable from './Componenets/RequestTable';
import Varification from './Screens/Varification';
import PaymentInfo from './Screens/PaymentInfo';
import CardSetup from './Screens/CardSetup';
import BankDetails from './Screens/BankDetails';
import PaymentSetup from './Screens/PaymentSetup';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SubjectInfo from './Screens/SubjectInfo';
import ClassDetails from './Screens/ClassDetails';
import SubjectInfo2 from './Screens/SubjectInfo2';
import Requests from './Screens/Requests';
import Classes from './Screens/Classes';
import ChatScreen from './Screens/ChatScreen';
import ClassesDetails from './Screens/ClassesDetails';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.MainScreenStyle}>
      <Stack.Navigator
        initialRouteName="ClassesDetails"
        screenOptions={{headerShown: false}}>

        <Stack.Screen name="ClassesDetails" component={ClassesDetails} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="Classes" component={Classes} />
        <Stack.Screen name="Requests" component={Requests} />

        <Stack.Screen name="logIn" component={LogIn} />
        <Stack.Screen name="AccountSetup" component={AccountSetup} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="Varification" component={Varification} />
        <Stack.Screen name="PersonalDetails2" component={PersonalDetails2} />
        <Stack.Screen name="PaymentInfo" component={PaymentInfo} />
        <Stack.Screen name="CardSetup" component={CardSetup} />
        <Stack.Screen name="BankDetails" component={BankDetails} />
        <Stack.Screen name="PaymentSetup" component={PaymentSetup} />
        <Stack.Screen name="SubjectInfo" component={SubjectInfo} />
        <Stack.Screen name="ClassDetails" component={ClassDetails} />
        {/* Class Details Not ready  */}
        <Stack.Screen name="SubjectInfo2" component={SubjectInfo2} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.MainScreenStyle}>
    //   {/* <LogIn /> */}
    //   {/* <AccountSetup /> */}
    //   {/* <PersonalInfo /> */}
    //   {/* <PersonalDetails /> */}
    //   {/* <Varification /> */}
    //   {/* <PersonalDetails2 /> */}
    //   {/* header */}
    //   {/* <PaymentInfo /> */}
    //   {/* <CardSetup /> */}
    //   {/* <BankDetails /> */}
    // </View>
  );
};

const styles = StyleSheet.create({
  MainScreenStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
