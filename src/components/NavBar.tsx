import React from 'react'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import { MaterialIcon } from './Icons'
import { View, Text } from 'react-native'

interface TypedProps {
  title: string
  subtitle?: string
}

const NavBar: React.FC<TypedProps> = ({ title, subtitle }) => {
  return (
    <View style={tw`flex flex-row items-center justify-between p-5 bg-[#2f313e]`}>
      <View style={tw`flex flex-row items-center`}>
        <Text style={[tw`text-white text-xl`, fonts.fontPoppins]}>{ title }</Text>
        {subtitle && <Text style={[tw`text-neutral-400 text-xs ml-2 mt-0.5`, fonts.fontPoppinsLight]}>{ subtitle }</Text>}
      </View>
      <MaterialIcon name="add" size="large" color="#EAF5FB" />
    </View>
  )
}

export default NavBar