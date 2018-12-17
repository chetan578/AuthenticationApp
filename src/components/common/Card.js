import React from 'react';
import {View} from 'react-native';


const Card =(props) =>{
const {containerStyles}=styles
return(
<View style={containerStyles}>
{props.children}
</View>
);
};

const styles={
	containerStyles:{
		borderRadius:2,
		borderColor:'#ddd',
		borderwidth:2,
		borderBottomWidth:0,
		shadowColor:'#000',
		shadowOffset:{width:0,height:2},
		shadowOpacity:0.3,
		elevation:2,
		marginLeft:5,
		marginRight:5,
		marginTop:10
}
}

export {Card}
