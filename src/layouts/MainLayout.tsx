import React from 'react'
import tw from 'twrnc'
import { SafeAreaView, ScrollView, View, Text } from 'react-native'

interface TypedProps {
  children: any
}

const MainLayout: React.FC<TypedProps> = ({ children }) => {
  return (
    <SafeAreaView style={tw`flex flex-col h-full bg-[#242830]`}>
      {children}
    </SafeAreaView>
  )
}

export default MainLayout