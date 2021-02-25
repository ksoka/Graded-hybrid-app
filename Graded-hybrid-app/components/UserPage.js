import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import FormField from './FormField'

const urlAdress = "https://graded-api.herokuapp.com/"

const UserPage = (props) => {

    pressButton = () => {
        axios.post(urlAdress + 'User', {}, {
          auth: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            dateOfBirth: dateOfBirth
          }
        }).then((response) => {
          console.log(response.data)
        })
      }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')

    let output;

    output = (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 50, fontWeight: '700'}}>User</Text>
        <FormField placeholder='First name' maxLength={20} setTextField={setFirstName} textField={firstName}/>
        <FormField placeholder='Last name' maxLength={20} setTextField={setLastName} textField={lastName}/>
        <FormField placeholder='Email adress' maxLength={50} setTextField={setEmail} textField={email}/>
        <FormField placeholder='Date of Birth' maxLength={20} setTextField={setDateOfBirth} textField={dateOfBirth}/>
        <Button title="Submit" onPress={pressButton}>Submit</Button>
    </View>
    )
    return output;
}
export default UserPage