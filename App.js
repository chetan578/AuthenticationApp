import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'
import {Header} from './src/components/common'
import LoginForm from './src/components/LoginForm'

class App extends React.Component {
  ComponentWillMount() {
      firebase.initializeApp({
    apiKey: "AIzaSyD-RykQYD6rH5Po9xeh5_GkrdB19J1xSgI",
    authDomain: "authentication-424ef.firebaseapp.com",
    databaseURL: "https://authentication-424ef.firebaseio.com",
    projectId: "authentication-424ef",
    storageBucket: "authentication-424ef.appspot.com",
    messagingSenderId: "1081857914864"
  });
}
  render() {
    return (
      <View>
      <Header headerText="Auth"/>
        <LoginForm/>
      </View>
    );
  }
}

export default App