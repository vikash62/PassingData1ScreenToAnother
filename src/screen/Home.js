import { Text, View ,TouchableOpacity,TextInput,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import Profile from './Profile';

export default function Home({navigation}) {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  const handleSubmit = () => {
navigation.navigate('Profile',{
  userName:name,
  userEmail:email,
  userPassword:password
})
  }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',paddingBottom:40 }}>
        <Text style={{color:"black",paddingBottom:80,fontSize:30}}>Home Screen</Text>
        
        <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                keyboardType='email-address'
                textContentType='emailAddress'
                name="name" value={name} onChangeText={(text)=>setName(text)}
              />
        <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                keyboardType='email-address'
                textContentType='emailAddress'
                value={email} onChangeText={(text)=>setEmail(text)}
              />
            
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                keyboardType='email-address'
                textContentType='emailAddress'
                value={password} onChangeText={(text)=>setPassword(text)}
              />
        <TouchableOpacity style={{backgroundColor:"lightblue",width:"50%",padding:20}}
         onPress={() =>handleSubmit()}>
            <Text style={{fontSize:16}}>submit</Text>
        </TouchableOpacity>

    
      </View>
    );
  }

  const styles = StyleSheet.create({
   
    inputLabel: {
      fontSize: 18,
      marginBottom: 6,
    },
    input: {
      width: '90%',
      // height: 40,
      backgroundColor: '#dfe4ea',
      borderRadius: 4,
      paddingHorizontal: 10,
    },
    
  });