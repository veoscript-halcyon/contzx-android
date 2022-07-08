import React from 'react'
import tw from 'twrnc'
import { fonts } from '../../styles/global'
import { useForm } from 'react-hook-form'
import { View, Modal, TouchableOpacity, Text } from 'react-native'
import { useDeleteContact } from '../../lib/ReactQuery'

interface TypedProps {
  modalData: any
  modalVisible: any
  setModalVisible: any
  setVisibleToast: any
  setToastMessage: any
}

const DeleteModal: React.FC<TypedProps> = ({ modalData, modalVisible, setModalVisible, setVisibleToast, setToastMessage }) => {

  const deleteContact = useDeleteContact()

  const { handleSubmit, formState: { isSubmitting } } = useForm()

  const onDelete = async () => {
    const id = modalData.id
    await deleteContact.mutateAsync({ id: id }, {
      onError: (error) => {
        console.log(error)
      },
      onSuccess: () => {
        setToastMessage('Deleted Successfully.')
        setVisibleToast(true)
      }
    })
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false)
      }}      
    >
      <View style={tw`flex flex-col items-center justify-center h-full bg-[#242830] bg-opacity-95`}>
        <Text style={[tw`text-lg text-white text-center px-5`, fonts.fontPoppinsBold]}>Are you sure you want to delete { modalData.name } in the contact list?</Text>
        <View style={tw`flex flex-row items-center justify-center w-full mt-3 pt-3`}>
          {isSubmitting && (
            <View style={[tw`flex flex-row items-center justify-center w-[10rem] px-3 py-2 mx-2 rounded-lg bg-red-500 bg-opacity-30`, fonts.fontPoppins]}>
              <Text style={[tw`text-white text-base`, fonts.fontPoppins]}>Deleting...</Text>
            </View>
          )}
          {!isSubmitting && (
            <React.Fragment>
              <TouchableOpacity
                style={tw`flex flex-row items-center justify-center w-[8rem] px-3 py-2 mx-2 rounded-lg bg-red-500`}
                activeOpacity={0.8}
                onPress={handleSubmit(onDelete)}
              >
                <Text style={[tw`text-white text-base`, fonts.fontPoppins]}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`flex flex-row items-center justify-center w-[8rem] px-3 py-2 rounded-lg bg-gray-700`}
                activeOpacity={0.8}
                onPress={() => {
                  setModalVisible(false)
                }}
              >
                <Text style={[tw`text-white text-base`, fonts.fontPoppins]}>Cancel</Text>
              </TouchableOpacity>
            </React.Fragment>
          )}
        </View>
      </View>
    </Modal>
  )
}

export default DeleteModal