import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme, useRoute } from '@react-navigation/native'
import moment from 'moment'
import axios from '../utils/fetcher'
import { ArrowDown, ArrowUp, MessageSquare, Trash } from './icons/index'

const Post = ({
	score,
	title,
	author,
	category,
	text,
	comments,
	created,
	url,
	votes,
	views,
	setIsLoaading,
	setData,
	deletePost,
	navigation,
	permalink
}) => {
	const { colors } = useTheme()
	const route = useRoute()

	return (
		<View
			as={SafeAreaView}
			style={[
				styles.container,
				{ backgroundColor: "white", borderColor: "white" }
			]}
		>
			<View style={styles.headerContainer}>
				<View style={styles.headerLeft}>
					<Text
						style={[styles.italicFont, { color: "blue"}]}
					>
						@{author}
					</Text>
					<Text style={[styles.dateText, { color: colors.text }]}>{"    "+moment(created*1000).fromNow()}</Text>
				</View>
				<View style={styles.headerRight}>
					
						<TouchableOpacity style={styles.trash} activeOpacity={0.5} onPress={deletePost}>
							<Trash color={"green"} width={20} height={20} />
						</TouchableOpacity>
					
				</View>
			</View>
			<Text
				style={[styles.title, { color: colors.text }]}
				// onPress={() => navigation.navigate('Post', { postId, permalink })}
				onPress={() => navigation.navigate("WebView", { url: url, title:title })}
			>
				{title}
			</Text>
			<Text
				numberOfLines={10}
				style={[
					{ color: colors.text },
					

				]}
				// onPress={() => navigation.navigate('Post', { postId, permalink })
				onPress={() => navigation.navigate("WebView", { url: url, title:title })
				}
			>
				{text}
			</Text>
			<View style={styles.bottomContainer}>
				<View style={styles.centerAlign}>
					<TouchableOpacity>
						<ArrowUp
							width={22}
							height={22}
							strokeWidth={4}
							color={colors.notification}
						/>
					</TouchableOpacity>
					<Text style={[styles.score, { color: colors.text }]}>{score}</Text>
					<TouchableOpacity>
						<ArrowDown
							width={22}
							height={22}
							strokeWidth={4}
							color={colors.primary}
						/>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={styles.centerAlign}
					activeOpacity={0.7}
					
				>
					<MessageSquare
						color={"pink"}
						style={styles.commentIcon}
						width={20}
						height={20}
						strokeWidth={3}
						onPress={() => navigation.navigate("WebView", { url: url, title:title })}
					/>
					<Text style={[styles.commentText, { color: colors.text }]}>{comments}</Text>
				</TouchableOpacity>
				<Text style={[styles.italicFont, { color: colors.text }]}>{views} views</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		paddingVertical: 7,
		marginBottom: 7,
		elevation: 1,
		borderWidth: 1
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 7,
		fontSize: 13
	},
	headerLeft: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	headerRight: {},
	bottomContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 12
	},
	centerAlign: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	title: {
		fontSize: 17,
	},
	score: {
		marginHorizontal: 5,
	},
	commentIcon: {
		marginBottom: -3
	},
	commentText: {
		marginLeft: 3
	},
	dateText: {
		fontSize: 12
	},
	link: {
		color: '#0064bd',
		fontWeight: 'bold'
	}
})

export default Post
