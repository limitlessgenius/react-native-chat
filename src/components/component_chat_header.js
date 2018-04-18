import React from 'react'
import { View, Text } from 'react-native'

const ChatHeader = (props) => {
	
	const { containerStyle, textStyle } = styles

	console.log('TITLE', props.headerTitle)

	return(
		<View style={containerStyle}>
			<Text style={textStyle}>{props.headerTitle}</Text>
		</View>
	)
}

const styles = {
	containerStyle: {
		height: 60, 
		paddingTop: 15,
		justifyContent: 'center', 
		alignItems: 'center', 
		position: 'relative', 
		elevation: 2, 
		backgroundColor: '#f8f8f8', 
		shadowColor: 'black', 
		shadowOpacity: 0.2, 
		shadowOffset: { width: 0, height: 2 }, 
	}, 
	textStyle: { 
		fontSize: 20, 
		color: 'black', 
	}
}

export default ChatHeader




