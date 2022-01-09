import React from 'react'
import { StyleSheet, View, FlatList, Text, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'

import axios from '../utils/fetcher'
export default ({ navigation, route }) => {

	const [postData, setPostData] = React.useState(null)
    const [category, setCategory] = React.useState('all')
    const [isLoading, setIsLoaading] = React.useState(false)

    const getPostData = React.useCallback(async () => {
        setIsLoaading(true)
        const data = await axios.get(route.permalink+".json")
    }, [])


	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
