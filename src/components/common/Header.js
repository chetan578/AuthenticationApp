import React from 'react'
import {Text ,View} from 'react-native'

const Header =(props)=>{
	const {textStyle,viewStyle}=styles
	return (
	    <View style={viewStyle}>
		<Text style={textStyle}>{props.headerText}</Text>
		</View>
);
};

const styles={

	viewStyle:{
		backgroundColor:'#D3D3D3',
		justifyContent:'center', 
		alignItems:'center',
		paddingTop:15,
		height:100,
		shadowColor:'#000',
		shadowOffset:{width:15,height:15},
		shadowOpacity:1,
		elevation:2,
		position:'relative'
	},
	textStyle:{
		fontSize:50
	}
};
export {Header};