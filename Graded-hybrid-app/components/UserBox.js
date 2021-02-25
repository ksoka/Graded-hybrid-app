import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'

const UserBox = (props) => {
    return(
        <View>
            <Text>{props.users.firstName}</Text>
            <Text>{props.users.lastName}</Text>
            <Text>{props.users.email}</Text>
            <Text>{props.users.dateOfBirth}</Text>
        </View>
    )
}
export default UserBox