import React, { Component } from 'react'
import { View, Text } from 'react-native'

import ChatHeader from './components/component_chat_header'

class App extends Component {
	render() {
		return(
			<View>
				<ChatHeader headerTitle={"Chat"}/>
			</View>
		)
	}
}

export default App




