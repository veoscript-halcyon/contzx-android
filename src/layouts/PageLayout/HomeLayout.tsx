import React from 'react'
import Toast from '../../utils/Toast'
import OfflineModal from '../../components/Modals/OfflineModal'
import NetInfo from '@react-native-community/netinfo'
import Card from '../../components/Card'
import tw from 'twrnc'
import { fonts } from '../../styles/global'
import { useGetContacts } from '../../lib/ReactQuery'
import { ScrollView, View, Text } from 'react-native'
import { onlineManager } from 'react-query'

interface TypedProps {
  navigation: any
}

const HomeLayout: React.FC<TypedProps> = ({ navigation }) => {

  const [visibleToast, setVisibleToast] = React.useState(false)
  const [toastMessage, setToastMessage] = React.useState('')

  const { data: contacts, isLoading, refetch, isRefetching } = useGetContacts()

  React.useEffect(() => {
    onlineManager.setEventListener(setOnline => {
      return NetInfo.addEventListener(state => {
        setOnline(!!state.isConnected)
      })
    })
  }, [])

   if (!onlineManager.isOnline()) {
    return (
      <OfflineModal
        refetch={refetch}
        isRefetching={isRefetching}
        modalVisible={!onlineManager.isOnline()}
        setVisibleToast={setVisibleToast}
        setToastMessage={setToastMessage}
      />
    )
   }

  return (
    <React.Fragment>
      <Toast
        visible={visibleToast}
        message={toastMessage}
      />
      <View style={tw`flex flex-col h-full px-2`}>
        {(isLoading) && (
          <View style={tw`flex flex-col items-center justify-center h-full`}>
            <Text style={[tw`text-white text-lg`, fonts.fontPoppinsBold]}>Loading...</Text>
          </View>
        )}
        {!isLoading && (
          <ScrollView>
            <View style={tw`mt-2 mb-20`}>
              {contacts?.map((contact: { id: string, name: string, phone: string, address: string, gender: string, status: string }) => (
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
    </React.Fragment>
  )
}

export default HomeLayout