import React from 'react'
import { View, Text } from 'react-native'

const ChatHeader = ({headerTitle}) => {

	const { containerStyle, textStyle } = styles
	return(
		<View style={containerStyle}>
			<Text style={textStyle}>{headerTitle}</Text>
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
	}
}



export default ChatHeader




