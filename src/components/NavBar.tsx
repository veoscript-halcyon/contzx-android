import React from 'react'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import { MaterialIcon } from './Icons'
import { View, Text, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'

interface TypedProps {
  title: string
  subtitle?: string
  navigation?: any
}

const NavBar: React.FC<TypedProps> = ({ title, subtitle, navigation }) => {

  const route = useRoute()

  return (
    <View style={tw`flex flex-row items-center justify-between p-5 border-b border-zinc-700 bg-[#2f313e]`}>
      <View style={tw`flex flex-row items-center`}>
        <Text style={[tw`text-white text-xl`, fonts.fontPoppins]}>{ title }</Text>
        {subtitle && <Text style={[tw`text-neutral-400 text-xs ml-2 mt-0.5`, fonts.fontPoppinsLight]}>{ subtitle }</Text>}
      </View>
      {route.name !== 'NewContact' && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('NewContact')
          }}
        >
          <MaterialIcon name="add" size="large" color="#EAF5FB" />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default NavBar