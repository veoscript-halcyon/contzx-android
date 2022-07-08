import React from 'react'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import { View, Text, TouchableOpacity } from 'react-native'

interface TypedProps {
  contact: {
    id: string
    name: string
    phone: string
    address: string
    gender: string
    status: string
  }
  navigation: any
}

const Card: React.FC<TypedProps> = ({ contact, navigation }) => {
  return (
    <View style={tw`flex flex-col rounded-xl p-5 mb-2 bg-[#2f313e]`}>
      <Text style={[tw`text-white text-lg mb-3`, fonts.fontPoppinsBold]}>
        { contact.name }
      </Text>
      <View style={tw`flex flex-col`}>
        <View style={tw`mb-3`}>
          <Text style={[tw`text-neutral-400 text-sm`, fonts.fontPoppinsLight]}>Gender:</Text>
          <Text style={[tw`text-white text-base`, fonts.fontPoppins]}>
            { contact.gender }
          </Text>
        </View>
        <View style={tw`mb-3`}>
          <Text style={[tw`text-neutral-400 text-sm`, fonts.fontPoppinsLight]}>Phone:</Text>
          <Text style={[tw`text-white text-base`, fonts.fontPoppins]}>
            { contact.phone }
          </Text>
        </View>
        <View style={tw`mb-3`}>
          <Text style={[tw`text-neutral-400 text-sm`, fonts.fontPoppinsLight]}>Address:</Text>
          <Text style={[tw`text-white text-base`, fonts.fontPoppins]}>
            { contact.address }
          </Text>
        </View>
      </View>
      <View style={tw`flex flex-row items-center justify-center w-full`}>
        <TouchableOpacity
          style={tw`flex flex-row items-center justify-center w-[6rem] px-3 py-2 mx-2 rounded-lg bg-green-500`}
          activeOpacity={0.8}
          onPress={() => {
            navigation.push('EditContact', contact)
          }}
        >
          <Text style={[tw`text-white text-base`, fonts.fontPoppins]}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row items-center justify-center w-[6rem] px-3 py-2 rounded-lg bg-red-500`}
          activeOpacity={0.8}
          onPress={() => {
            console.log('Go to Delete Function')
          }}
        >
          <Text style={[tw`text-white text-base`, fonts.fontPoppins]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Card