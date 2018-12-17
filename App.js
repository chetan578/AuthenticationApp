import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'
import {Header,Spinner,Button,Card,CardSection} from './src/components/common'
import LoginForm from './src/components/LoginForm'

class App extends React.Component {

state={loggedIn:null}

  componentWillMount() {
      firebase.initializeApp({
    apiKey: "AIzaSyD-RykQYD6rH5Po9xeh5_GkrdB19J1xSgI",
    authDomain: "authentication-424ef.firebaseapp.com",
    databaseURL: "https://authentication-424ef.firebaseio.com",
    projectId: "authentication-424ef",
    storageBucket: "authentication-424ef.appspot.com",
    messagingSenderId: "1081857914864"
  });

firebase.auth().onAuthStateChanged( (user)=>{
if(user)
{
  this.setState({loggedIn:true})
}
else{
  this.setState({loggedIn:false})
}
})
}

renderContent()
{
  switch(this.state.loggedIn){
  case true:
  return(
    <Card>
    <CardSection>
     <Button text={'LOG OUT'}
    onPress={()=>firebase.auth().signOut()}/>
    </CardSection>
    </Card>
    )
  case false:
  return <LoginForm/>
  default:
  return <Spinner/>
}
}

  render() {
    return (
      <View>
      <Header headerText="Auth"/>
        {this.renderContent()}
      </View>
    );
  }
}

export default App