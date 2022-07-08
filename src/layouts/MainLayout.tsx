import React from 'react'
import NavBar from '../components/NavBar'
import tw from 'twrnc'
import { SafeAreaView, ScrollView, View, Text } from 'react-native'

interface TypedProps {
  children: any
}

const MainLayout: React.FC<TypedProps> = ({ children }) => {
  return (
    <SafeAreaView style={tw`flex flex-col h-full bg-[#242830]`}>
      <NavBar
        title="Contzx"
        subtitle="Public Contacts"
      />
      {children}
    </SafeAreaView>
  )
}

export default MainLayout