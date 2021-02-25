import React from 'react'
import { View, Text, Image, StyleSheet, } from 'react-native'

const PostingBox = (props) => {
    return (
        <View>
            <Text>{props.infor.title}</Text>
            <Text>{props.infor.description}</Text>
            <Text>{props.infor.category}</Text>
            <Text>{props.infor.location}</Text>
            {/* <Image source={{ uri: props.infor.images1}}></Image> */}
            <Text>{props.infor.images1}</Text>
            <Text>{props.infor.askingPrice}</Text>
            <Text>{props.infor.deliveryType}</Text>
            <Text>{props.infor.dateOfPosting}</Text>
            <Text>{props.infor.sellerName}</Text>
            <Text>{props.infor.sellerInfo}</Text>
        </View>
    )

}
export default PostingBox