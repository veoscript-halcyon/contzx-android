import React from 'react'
import Toast from '../utils/Toast'
import DeleteModal from './Modals/DeleteModal'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import { View, Text, TouchableOpacity } from 'react-native'

interface TypedProps {
  navigation: any
  contact: {
    id: string
    name: string
    phone: string
    address: string
    gender: string
    status: string
  }
}

const Card: React.FC<TypedProps> = ({ navigation, contact }) => {

  const [modalVisible, setModalVisible] = React.useState(false)
  const [modalData, setModalData] = React.useState({})

  const [visibleToast, setVisibleToast] = React.useState(false)
  const [toastMessage, setToastMessage] = React.useState('')

  React.useEffect(() => {
    setVisibleToast(false)
  }, [visibleToast])

  return (
    <React.Fragment>
      <Toast
        visible={visibleToast}
        message={toastMessage}
      />
      <DeleteModal
        modalData={modalData}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible} 
        setVisibleToast={setVisibleToast}
        setToastMessage={setToastMessage}
      />
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
        <View style={tw`flex flex-row items-center justify-center w-full mt-3 pt-3 border-t border-gray-700`}>
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
              setModalVisible(true)
              setModalData(contact)
            }}
          >
            <Text style={[tw`text-white text-base`, fonts.fontPoppins]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  )
}

export default Card