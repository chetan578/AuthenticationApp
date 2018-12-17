import React from 'react'
import {View ,Text} from 'react-native'

const CardSection =(props) =>{
	return(
		<View style={styles.containerStyle}>
		{props.children}
		</View>
		)
}

const styles={
containerStyle:{
	borderBottomWidth:2,
	padding:5,
	justifyContent:'flex-start',
	flexDirection:'row',
	position:'relative',
	borderColor:'#ddd',
	backgroundColor:'#fff'
}

}
export {CardSection}