import React,{Component} from 'react'
import {Text} from 'react-native'
import {CardSection,Card,Button,Input} from './common'
import firebase from 'firebase'

class LoginForm extends Component{

	state ={email:'',password:'',error:''}

	onButtonPress(){
	this.setState({error:''})
	const {email ,password}=this.state
firebase.auth().signInWithEmailAndPassword(email,password)
	.catch(()=>{
		firebase.auth().createUserWithEmailAndPassword(email,password)
		.catch(()=>{
			this.setState({error:'Authentication failed'})
		})
	})

}

	render()
	{   return(
			<Card>
			<CardSection>
		<Input 
		label={'Email'}
		placeholder={'user@gmail.com'}
		value={this.state.email}
		onChangeText ={email=>this.setState({email})}
		/>	
		</CardSection>
		<CardSection>
			<Input
			label={'Password'}
			placeholder={'password'}
			value={this.state.password}
			onChangeText={password=>this.setState({password})}
			secureTextEntry
			/>
			</CardSection>

<Text style={styles.errorTextStyle}>
			{this.state.error}
			</Text>
			
			<CardSection>
			<Button 
			onPress={this.onButtonPress.bind(this)}
			text={'click me'}/>
			</CardSection>
			</Card>
			);
		}
	}
	const styles={
		errorTextStyle:{
			color:'red',
			fontSize:20,
			alignSelf:'center'
		}
	}
export default LoginForm