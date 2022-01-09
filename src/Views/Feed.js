import React from 'react'
import { StyleSheet, View, FlatList, Text, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'

import axios from '../utils/fetcher'

import Post from '../components/Post'

export default  ({navigation}) => {
    const { colors } = useTheme()

    const [postData, setPostData] = React.useState(null)
    const [category, setCategory] = React.useState('all')
    const [isLoading, setIsLoaading] = React.useState(false)

    const getPostData = React.useCallback(async () => {
        setIsLoaading(true)
        const data = await axios.get("/.json")
        console.log(data.data.data.children[0].data.url)
        setPostData(data.data.data.children)
        setIsLoaading(false)
    }, [category])

    React.useEffect(() => {
        getPostData()
    }, [getPostData])

    return (
        <View as={SafeAreaView} style={styles.container}>
            <StatusBar
                barStyle={'default'}
                backgroundColor={colors.background}
            />
            {postData ? (
                <FlatList
                    data={postData}
                    extraData={isLoading}
                    refreshing={isLoading}
                    onRefresh={() => getPostData()}
                    keyExtractor={item => item.data.id}
                    
                    
                    renderItem={({ item, index }) => (
                        <Post
                            index={index}
                            postId={item.data.id}
                            score={item.data.score}
                            // type={item.data.type}
                            title={item.data.title}
                            author={item.data.author}
                            category={item.data.category}
                            text={item.data.selftext}
                            comments={item.data.num_comments}
                            created={item.data.created}
                            url={item.data.url}
                            // votes={item.data.votes}
                            views={item.data.view_count}
                            setIsLoaading={setIsLoaading}
                            setData={setPostData}
                            navigation={navigation}
                            permalink={item.data.permalink}
                        />
                    )}
                />
            ) : (
                <Text style={{fontSize:80}}>
                    No Post
                </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    categoryPicker: {
        padding: 5,
        marginVertical: 7,
        elevation: 3
    },
    empty: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 22
    }
})
