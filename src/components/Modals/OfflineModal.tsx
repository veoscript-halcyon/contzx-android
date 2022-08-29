import React from 'react'
import tw from 'twrnc'
import { fonts } from '../../styles/global'
import { View, Modal, TouchableOpacity, Text } from 'react-native'

interface TypedProps {
  refetch?: any
  isRefetching: boolean
  modalVisible: any
  setVisibleToast: any
  setToastMessage: any
}

const DeleteModal: React.FC<TypedProps> = ({ refetch, isRefetching, modalVisible, setVisibleToast, setToastMessage }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <View style={tw`flex flex-col items-center justify-center h-full bg-[#242830] bg-opacity-95`}>
        <Text style={[tw`text-lg text-white text-center px-5`, fonts.fontPoppinsBold]}>You are not connected to the internet.</Text>
        <View style={tw`flex flex-row items-center justify-center w-full mt-3 pt-3`}>
          {isRefetching && (
            <View style={[tw`flex flex-row items-center justify-center w-[10rem] px-3 py-2 mx-2 rounded-lg bg-red-500 bg-opacity-30`, fonts.fontPoppins]}>
              <Text style={[tw`text-white text-base`, fonts.fontPoppins]}>Reconnecting...</Text>
            </View>
          )}
          {!isRefetching && (
            <TouchableOpacity
              style={tw`flex flex-row items-center justify-center w-[8rem] px-3 py-2 mx-2 rounded-lg bg-red-500`}
              activeOpacity={0.8}
              onPress={() => {
                refetch()
              }}
            >
              <Text style={[tw`text-white text-base`, fonts.fontPoppins]}>Try Again</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  )
}

export default DeleteModal