import React from 'react'
import { ScrollView, View, Text, Image, TextInput, StyleSheet } from 'react-native'
import PostingBox from './PostingBox'

const StoreView = (props) => {
    console.log('tämä')
    console.log(props.allPosts)
    return (
        <ScrollView>
            <Text style={{ flex: 1, fontSize: 50, fontWeight: '700', paddingTop: 30}}>All Postings</Text>
            <TextInput style={styles.searchBar} onChangeText={text => props.onSearch(text)} value={props.search} />
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                {props.allPosts.map(post => <PostingBox key={post.postId} onTouchable={props.onThouchable} infor={post}/>)}
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    searchBar:{
        height: 30,
        width: 100,
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 6,
        paddingRight: 6,
    }
})
export default StoreView