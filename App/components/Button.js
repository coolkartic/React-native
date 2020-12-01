import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  loginBtn:{
    width:"80%",
    backgroundColor:"green",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
})


export const Button = (props= ButtonProps) => {
  const { children, onPress } = props

  return (
    <TouchableOpacity onPress={onPress} style={styles.loginBtn}>
      <View>
        <Text style={styles.loginText} >{children}</Text>
      </View>
    </TouchableOpacity>
  )
}