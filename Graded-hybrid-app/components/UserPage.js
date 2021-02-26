import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import FormField from './FormField'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const axios = require('axios')

const urlAdress = "https://graded-api.herokuapp.com/"

const UserPage = (props) => {

    pressButton = () => {
        axios.post(urlAdress + 'User', {}, {
          auth: {
            firstName: firstName,
            lastName: lastName,
          }
        }).then((response) => {
          console.log(response.data)
          props.logInStatus = true
        })
      }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    let output;

    output = (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 50, fontWeight: '700'}}>User</Text>
        <FormField placeholder='First name' maxLength={20} setTextField={setFirstName} textField={firstName}/>
        <FormField placeholder='Last name' maxLength={20} setTextField={setLastName} textField={lastName}/>
        <Button title="Submit" onPress={pressButton}>Submit</Button>
    </View>
    )
    return output;
}
export default UserPage