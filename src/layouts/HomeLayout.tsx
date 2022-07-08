import React from 'react'
import Card from '../components/Card'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import { useGetContacts } from '../lib/ReactQuery'
import { ScrollView, View, Text } from 'react-native'

const HomeLayout= () => {

  const { data: contacts, isLoading, isError } = useGetContacts()

  return (
    <View style={tw`flex flex-col h-full p-2`}>
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
          <View style={tw`mb-16`}>
            {contacts.map((contact: { id: string, name: string, phone: string, address: string, gender: string, status: string }) => (
              <Card
                key={contact.id}
                contact={contact}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  )
}

export default HomeLayout