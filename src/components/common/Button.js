import React from 'react' 
import {TouchableOpacity,Text} from 'react-native'

const Button=(props)=>{
	const {buttonStyle,textStyle}=styles
	return (
		<TouchableOpacity onPress ={props.onPress} style={buttonStyle}>
		<Text style={textStyle}>{props.text}</Text>
		</TouchableOpacity>
)
}

const styles={

textStyle:{

fontSize:18,
fontWeight:'600',
color:'#007aff',
alignSelf:'center',
paddingTop:10,
paddingBottom:10
},

buttonStyle:{
flex:1,
alignSelf:'stretch',
backgroundColor:'#fff',
borderRadius:6,
borderWidth:1,
marginLeft:5,
marginRight:5,
borderColor:'007aff'

}
}
export {Button}