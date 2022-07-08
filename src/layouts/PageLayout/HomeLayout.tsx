import React from 'react'
import Card from '../../components/Card'
import tw from 'twrnc'
import { fonts } from '../../styles/global'
import { useGetContacts } from '../../lib/ReactQuery'
import { ScrollView, View, Text } from 'react-native'

interface TypedProps {
  navigation: any
}

const HomeLayout: React.FC<TypedProps> = ({ navigation }) => {

  const { data: contacts, isLoading, isError } = useGetContacts()

  return (
    <View style={tw`flex flex-col h-full px-2`}>
      {isLoading && (
        <View style={tw`flex flex-col items-center justify-center h-full`}>
          <Text style={[tw`text-white text-lg`, fonts.fontPoppinsBold]}>Loading...</Text>
        </View>
      )}
      {isError && (
        <View style={tw`flex flex-col items-center justify-center h-full`}>
          <Text style={[tw`text-white text-lg`, fonts.fontPoppinsBold]}>Ooops! There is an error, check your internet...</Text>
        </View>
      )}
      {!isLoading && (
        <ScrollView>
          <View style={tw`mt-2 mb-20`}>
            {contacts.map((contact: { id: string, name: string, phone: string, address: string, gender: string, status: string }) => (
              <Card
                key={contact.id}
                contact={contact}
                navigation={navigation}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  )
}

export default HomeLayout