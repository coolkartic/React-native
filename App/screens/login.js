import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,Image,SafeAreaView
} from 'react-native'
import { connect } from 'react-redux'
import { actions, States } from '../store'
import { Button } from '../components'

/**
 * A login component that display username and password text field.
 * Loading indicator will show up when login is in process.
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props)

    // init local state
    this.state = {
      username: 'admin',
      password: 'secret'
    }
  }

  render() {
    const { loading, doLogin } = this.props

    // show only loading indicator if loading state is true
    if (loading) {
      return (
        <SafeAreaView style={{flex:3}}>
          <View style={{flex:3,alignItems:'center',alignContent:'center',paddingTop:40}}>
          <ActivityIndicator  size="large" color="green" />
          </View>

     
        </SafeAreaView>
      )
        }


    // display login screen
    return (
      <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View>
        <Image
          style={styles.logo}
         source={require('../../assets/tnlogo.png')}
        /> 
        </View>
        <Text style={{color:'green',fontWeight:'bold',fontSize:20, alignItems:'center',marginBottom:10}}>EMIS LOGIN</Text>
      
    
      <View style={styles.inputView} >
         <TextInput  
          style={styles.inputText}
          placeholder="Email..." 
          placeholderTextColor="white"
          onChangeText={username => this.setState({ username })}
          value={this.state.username}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="white"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}/>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
    
        <Button   onPress={() => {
            doLogin(this.state.username, this.state.password)
          }}>LOGIN</Button>
    
     


    </View>
    </SafeAreaView>
    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 190,
    height: 210,
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"black",
    fontSize:11,
    fontWeight:'bold'
  },
 
});

/**
 * Login screen.
 */
export const Login = connect(
  
  // inject states
  (state=States) => ({
    
    // props.loading -> modules.app.loading
    loading: state.app.loading
  }),
  
  // inject actions
  dispatch => ({

    // props.doLogin -> modules.login.login()
    doLogin: (username, password) =>
      dispatch(actions.user.login(username, password))
  })
)(App)