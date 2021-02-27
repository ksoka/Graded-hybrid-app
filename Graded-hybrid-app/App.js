import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StoreView from './components/StoreView'
import UserPage from './components/UserPage'
import AddPost from './components/AddPost'
import AddUser from './components/AddUser'
import { Ionicons } from 'react-native-vector-icons';
import axios from 'axios';

const urlAdress = "https://graded-api.herokuapp.com/"

const Tab = createBottomTabNavigator();

export default class App extends Component{

  constructor(props) 
  {
    super(props);
    this.state = {
      search: "",
      allPosts: [],
      returnedPost: [],
      logInStatus: false
    }
  }

  onSearch = (text) => {
    this.setState({search: text})
  }

  onTouchable = (postId) => {
    axios.get(urlAdress + 'Posts' + postId)
    .then((response) => {
      this.setState({returnedPost: response.data})
    })
    .catch((error) => {
      console.log(error);
    })
  }
  componentDidMount() {
    axios.get(urlAdress + "Posts")
    .then((response) => {
      this.setState({allPosts: response.data})
    })
  };

  logInStatus = () => {
    this.setState({logInStatus: true})
  }

  refreshPage = () => {
    axios.get(urlAdress + 'Posts')
    .then((response) => {
      this.setState({allPosts: response.data})
    }) 
  }


  render(){
    let output;

    output = (  
      <View style={ styles.container }>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Explore" 
            options={{ tabBarIcon: ({ color, size }) => (
              <Ionicons name="planet" color={color} size={size} />)
            }} 
          >
            { props => <StoreView {...props} allPosts={ this.state.allPosts } onSearch={this.onSearch} search={this.state.search} onTouchable={this.onTouchable}/>} 
          </Tab.Screen>
          <Tab.Screen
            name="Posting"
            options={{ tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" color={color} size={size} />
            )}}>
            { props => <AddPost {...props} newPost={this.newPost} logInStatus={this.state.logInStatus} refreshPage={this.refreshPage}/>}
          </Tab.Screen>
          <Tab.Screen 
            name="User" 
            options={{ tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />)
            }} 
          >
            { props => <UserPage {...props} logInStatus={this.logInStatus}/>}
          </Tab.Screen>
          <Tab.Screen
          name="Register"
          options={{ tabBarIcon: ({ color, size}) => (
            <Ionicons name="person" color={color} size={size} />
          )}}
          >
            { props => <AddUser {...props} logInStatus={this.state.logInStatus}/>}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
    );
    return output;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 18,
    justifyContent: 'center',
  },
});
