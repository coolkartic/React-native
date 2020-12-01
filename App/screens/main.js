import React, { Component } from 'react'
import { View, Text,LogBox,Image } from 'react-native'
import { connect } from 'react-redux'
import { actions, States } from '../store'
import { Login } from './login'
import { Button } from '../components'
import AsyncStorage from '@react-native-community/async-storage'
LogBox.ignoreAllLogs();
/**
 * Main component. Display greeting when user is logged in,
 * otherwise it will display the login screen.
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(){
    super()
    this.state={
      'login_check' : false
    }
  }
  
  async componentDidMount(){
    const isUser=await AsyncStorage.getItem("userData")
  
  console.log("CHECK VALUE",isUser);
    if(isUser == null ||  isUser == '')
    {
      this.setState({login_check:false})
    }
    else{
      this.setState({login_check:true})
    }
    this.isMounted=true;

  }
  render() {
   
 
  const { doLogout, loggedIn,fullName,userStored} = this.props
  
 
    // Display login screen when user is not logged in
    
    let User = this.state.login_check;
   
   
    console.log("loggedIn",loggedIn,"User",User)
    console.log("STEP 2 ENDS");
    if (!loggedIn && !User) {
      return (
       
          <Login />
             )
    }
    else
    {
      console.log("NAME:",fullName,"STORED:",userStored)

      return (
        <View style={{alignItems:'center',alignContent:'center',paddingTop:40}}>

          <Text style={{fontWeight:'bold',fontSize:20,color:'dodgerblue'}}>DASHBOARD {fullName}!</Text>
          <Image
          style={{ 
            width: 190,
            height: 210,
            marginBottom:40}}
         source={require('../../assets/wel.jpg')}
        /> 
          <Button
            onPress={() => {
              doLogout()
            }}
          >
            Logout
          </Button>
        </View>
      )
    }
    


    // Display greeting with user full name displayed
   
  }
}

export const Main = connect(

  // inject states to props
  (state= States) => ({
    
    loggedIn: state.user.loggedIn,
    fullName: state.user.fullName,
    userStored:state.user.userStored

  }),

  // inject actions to props
  dispatch => ({
     
    doLogout: () => dispatch(actions.user.logout())
    
  })
  
)

(App)
