import React from 'react'
import { View, TextInput } from 'react-native'

export default FormField = (props) => {

    return(
        <View>
            <TextInput
            placeholder={props.placeholder}
            onChangeText={props.setTextField}
            value={props.textField}
            maxLength={props.maxLength}
            style={{height: 40, padding: 5}}
            ></TextInput>
        </View>
    )
}