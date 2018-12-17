import React from 'react'
import {Text, View,TextInput} from 'react-native'

const Input= ({label,onChangeText,value,placeholder,secureTextEntry}) =>{
	const {inputStyle,containerStyle,labelStyle}=styles;
	return (
		<View style={containerStyle}>
		<Text style={labelStyle}>{label}</Text>
		<TextInput
		style={inputStyle} 
		value={value}
		secureTextEntry={secureTextEntry}
		placeholder={placeholder}
		onChangeText={onChangeText}/>
		</View>
		)
}

const styles={
	inputStyle:{
	color:'#000',
	paddingRight:5,
	paddingLeft:5,
	fontSize:18,
	lineHeight:24,
	flex:3
	},
	containerStyle:{
	height:40,
	flex:2,
	flexDirection:'row',
	alignItems:'center'
	},
	labelStyle:{
		fontSize:18,
		paddingLeft:20,
		flex:1
	}
}
export {Input}

