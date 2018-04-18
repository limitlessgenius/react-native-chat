import React from 'react'
import { View, TextInput } from 'react-native'

import Card from './component_card'
import CardSection from './component_card_section'

const ChatInput = () => {
	return(
		<Card>
			<TextInput
				placeholder={"Introduce text"}
			></TextInput>
		</Card>
	)
}

export default ChatInput


