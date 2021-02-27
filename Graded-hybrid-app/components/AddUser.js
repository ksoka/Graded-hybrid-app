import React, {useState} from 'react'
import { Text, View, Button} from 'react-native'
import FormField from './FormField'
const axios = require('axios')

const urlAdress = "https://graded-api.herokuapp.com/"

const AddUser = (props) => {

    pressButton = () => {
        axios.post(urlAdress + 'User', {}, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            dateOfBirth: dateOfBirth
        }).then((response) => {
            console.log(response.data)
        })
    }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 50, fontWeight: '700',}}>Register</Text>
            <FormField placeholder='First name' maxLength={50} setTextField={setFirstName} textField={firstName}/>
            <FormField placeholder='Last name' maxLength={50} setTextField={setLastName} textField={lastName}/>
            <FormField placeholder='Email' maxLength={50} setTextField={setEmail} textField={email}/>
            <FormField placeholder='Date of Birth' maxLength={50} setTextField={setDateOfBirth} textField={dateOfBirth}/>
            <Button title="Submit" onPress={pressButton}>Register</Button>
        </View>
    )
}
export default AddUser