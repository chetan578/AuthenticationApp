import React,{Component} from 'react'
import {Text} from 'react-native'
import {CardSection,Card,Button,Input,Spinner} from './common'
import firebase from 'firebase'

class LoginForm extends Component{

	state ={email:'',password:'',error:'',loading:false}

	onButtonPress(){
	
	const {email,password}=this.state
	this.setState({error:'',loading:true})

firebase.auth().signInWithEmailAndPassword(email,password)
	.then(this.onLoginSuccess.bind(this))
	.catch(()=>{
		firebase.auth().createUserWithEmailAndPassword(email,password)
		.then(this.onLoginSuccess.bind(this))
		.catch(this.onLoginFail.bind(this))
	})
}

onLoginSuccess()
{
	this.setState({
		email:'',
		password:'',
		error:'',
		loading:false
	})
}
onLoginFail()
{
	this.setState({
		error:'Authentication failed',
		loading:false
	})
}

renderButton()
{
	if(this.state.loading)
	{
		return (<Spinner/>)
	}
	return (<Button 
			onPress={this.onButtonPress.bind(this)}
			text={'Log In'}
			/>
)
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
			{this.renderButton()}
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