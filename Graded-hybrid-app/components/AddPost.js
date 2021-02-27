import React, { useState } from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import FormField from './FormField'
const axios = require('axios')

const urlAdress = "https://graded-api.herokuapp.com/"

const AddPost = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [images1, setImages1] = useState('');
    const [askingPrice, setAskingPrice] = useState('');
    const [deliveryType, setDeliveryType] = useState('');
    const [dateOfPosting, setDateOfPosting] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [sellerInfo, setSellerInfo] = useState('');

    pressButton = () => {
      axios.post(urlAdress + 'Posts', {
            title: title,
            description: description,
            category: category,
            location: location,
            images1: images1,
            askingPrice: askingPrice,
            deliveryType: deliveryType,
            dateOfPosting: dateOfPosting,
            sellerName: sellerName,
            sellerInfo: sellerInfo
      }).then((response) => {
          console.log(response.data)
          props.refreshPage()
      })
    }

    let output;

    if( props.logInStatus == false) {
        output = (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 50, fontWeight: '700', paddingTop: 20}}>You need to log in to add post</Text>
            </View>
        )
    }
    else {
        output = (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 50, fontWeight: '700', paddingTop: 20}}>Adding Post</Text>
                <FormField placeholder='Title' maxLength={50} setTextField={setTitle} textField={title}/>
                <FormField placeholder='Description (200 letters)' maxLength={200} setTextField={setDescription} textField={description}/>
                <FormField placeholder='Category' maxLength={50} setTextField={setCategory} textField={category}/>
                <FormField placeholder='Location' maxLength={50} setTextField={setLocation} textField={location}/>
                <FormField placeholder='Image' maxLength={50} setTextField={setImages1} textField={images1}/>
                <FormField placeholder='Asking price' maxLength={50} setTextField={setAskingPrice} textField={askingPrice}/>
                <FormField placeholder='Delivery type (shipping or pickup)' maxLength={50} setTextField={setDeliveryType} textField={deliveryType}/>
                <FormField placeholder='Date of posting' maxLength={50} setTextField={setDateOfPosting} textField={dateOfPosting}/>
                <FormField placeholder='Seller name (first and last name)' maxLength={50} setTextField={setSellerName} textField={sellerName}/>
                <FormField placeholder='Seller info (Home street etc)' maxLength={50} setTextField={setSellerInfo} textField={sellerInfo}/>
                <Button title="Submit" onPress={pressButton}>Submit</Button>
            </View>
        )
    }

    return output
}
export default AddPost