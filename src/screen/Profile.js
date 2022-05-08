import { View, Text } from 'react-native'
import React from 'react'

export default function Profile({route,navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',paddingBottom:40 }}>
     
      <Text>Profile</Text>
      <Text>Email: {route.params.userEmail} </Text>
      <Text>name  {route.params.userName} </Text>
      <Text>password  {route.params.userPassword} </Text>
    </View>
  )
}