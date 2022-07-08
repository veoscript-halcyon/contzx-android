import React from 'react'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import { useGetContacts } from '../lib/ReactQuery'
import { ScrollView, View, Text } from 'react-native'

const HomeLayout= () => {

  const { data: contacts, isLoading, isError } = useGetContacts()

  return (
    <View style={tw`flex flex-col h-full`}>
      {isLoading && (
        <View style={tw`flex flex-col items-center justify-center h-full`}>
          <Text style={[tw`text-white text-lg`, fonts.fontPoppinsBold]}>Loading...</Text>
        </View>
      )}
      {isError && (
        <View style={tw`flex flex-col items-center justify-center h-full`}>
          <Text style={[tw`text-white text-lg`, fonts.fontPoppinsBold]}>Ooops! There is an error...</Text>
        </View>
      )}
      {!isLoading && (
        <ScrollView>
          {contacts.map((contact: { id: number, name: string, phone: string, address: string, gender: string, status: string, created_at: Date, updated_at: Date }) => (
            <View key={contact.id}>
              <Text style={tw`text-white text-lg`}>{contact.name}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  )
}

export default HomeLayout