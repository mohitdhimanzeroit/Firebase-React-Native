import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {signOut} from 'firebase/auth';
import { auth } from '../config/firebase'
export default function HomeScreen() {
  const handleLogout = async ()=>{
    await signOut(auth);
  }
  return (
    <SafeAreaView classname = "flex-1 flex-row justify-center items-center">
      <Text classname="text-lg">Home Screen</Text>
      <TouchableOpacity onPress={handleLogout} classname="p-1 bg-red-400 rounded-lg">
<Text classname="text-white text-lg font-bold">Logout</Text>
     </TouchableOpacity>
    </SafeAreaView>
  )
}