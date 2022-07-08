import React from 'react'
import tw from 'twrnc'
import { fonts } from '../../styles/global'
import { useForm, Controller } from 'react-hook-form'
import { Dropdown } from 'react-native-element-dropdown'
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useStoreContact } from '../../lib/ReactQuery'
import { useNavigation } from '@react-navigation/native'

interface FormData {
  name: string
  phone: string
  address: string
}

const NewContactForm = () => {

  const storeContact = useStoreContact()

  const navigation = useNavigation()

  const [genderTypeValue, setGenderTypeValue] = React.useState<string>('')
  const [genderTypeError, setGenderTypeError] = React.useState(false)

  const [statusTypeValue, setStatusTypeValue] = React.useState<string>('')
  const [statusTypeError, setStatusTypeError] = React.useState(false)

  const genderTypes = [
    { label: '', value: '' },
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' }
  ];

  const statusTypes = [
    { label: '', value: '' },
    { label: 'Single', value: 'Single' },
    { label: 'Married', value: 'Married' },
    { label: 'Widowed', value: 'Widowed' }
  ];

  const defaultValues = {
    name: '',
    phone: '',
    address: ''
  }

  const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({ defaultValues })

  const onSave = async (formData: FormData) => {
    const name = formData.name
    const phone = formData.phone
    const address = formData.address
    const gender = genderTypeValue
    const status = statusTypeValue

    if (gender === '') return setGenderTypeError(true)

    await storeContact.mutateAsync({
      name: name,
      phone: phone,
      address: address,
      gender: gender,
      status: status
    },
    {
      onError: (error) => {
        console.log(error)
      },
      onSuccess: () => {
        navigation.goBack()
      }
    })
  }

  return (
    <ScrollView style={tw`h-full`}>
      <View style={tw`flex flex-col px-2 py-3`}>
        <View style={tw`flex flex-col mb-2`}>
          <Text style={[tw`text-neutral-400 text-sm ml-2 mb-1`, fonts.fontPoppins]}>Name</Text>
          <Controller
            control={control}
            name="name"
            rules={{
              required: true,
              maxLength: 50
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[tw`p-2 rounded-lg border border-transparent text-lg text-white bg-[#2f313e]`, fonts.fontPoppins]}
                keyboardType="default"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.name && <Text style={[tw`text-xs text-red-600 ml-1 mt-0.5`, fonts.fontPoppinsLight]}>Name is required.</Text>}
        </View>
        <View style={tw`flex flex-col mb-2`}>
          <Text style={[tw`text-neutral-400 text-sm ml-2 mb-1`, fonts.fontPoppins]}>Phone</Text>
          <Controller
            control={control}
            name="phone"
            rules={{
              required: true,
              maxLength: 50
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[tw`p-2 rounded-lg border border-transparent text-lg text-white bg-[#2f313e]`, fonts.fontPoppins]}
                keyboardType="phone-pad"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.phone && <Text style={[tw`text-xs text-red-600 ml-1 mt-0.5`, fonts.fontPoppinsLight]}>Phone is required.</Text>}
        </View>
        <View style={tw`flex flex-col mb-2`}>
          <Text style={[tw`text-neutral-400 text-sm ml-2 mb-1`, fonts.fontPoppins]}>Gender</Text>
          <Dropdown
            style={[tw`p-2 rounded-lg border border-transparent text-lg text-white bg-[#2f313e]`, fonts.fontPoppins]}
            selectedTextStyle={[tw`text-base text-white`, fonts.fontPoppins]}
            data={genderTypes}
            maxHeight={200}
            statusBarIsTranslucent={true}
            labelField="label"
            valueField="value"
            placeholder=""
            value={genderTypeValue}
            onChange={item => {
              setGenderTypeValue(item.value)
              setGenderTypeError(false)
            }}
          />
          {genderTypeError && <Text style={[tw`text-xs text-red-600 ml-1 mt-0.5`, fonts.fontPoppinsLight]}>Gender is required.</Text>}
        </View>
        <View style={tw`flex flex-col mb-2`}>
          <Text style={[tw`text-neutral-400 text-sm ml-2 mb-1`, fonts.fontPoppins]}>Civil Status</Text>
          <Dropdown
            style={[tw`p-2 rounded-lg border border-transparent text-lg text-white bg-[#2f313e]`, fonts.fontPoppins]}
            selectedTextStyle={[tw`text-base text-white`, fonts.fontPoppins]}
            data={statusTypes}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder=""
            value={statusTypeValue}
            onChange={item => {
              setStatusTypeValue(item.value)
              setStatusTypeError(false)
            }}
          />
          {statusTypeError && <Text style={[tw`text-xs text-red-600 ml-1 mt-0.5`, fonts.fontPoppinsLight]}>Civil Status is required.</Text>}
        </View>
        <View style={tw`flex flex-col mb-2`}>
          <Text style={[tw`text-neutral-400 text-sm ml-2 mb-1`, fonts.fontPoppins]}>Address</Text>
          <Controller
            control={control}
            name="address"
            rules={{
              required: true,
              maxLength: 50
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[tw`p-2 rounded-lg border border-transparent text-lg text-white bg-[#2f313e]`, fonts.fontPoppins]}
                keyboardType="default"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.address && <Text style={[tw`text-xs text-red-600 ml-1 mt-0.5`, fonts.fontPoppinsLight]}>Address is required.</Text>}
        </View>
        <View style={tw`flex flex-row items-center justify-center mt-2 mb-2`}>
          {isSubmitting && (
            <View style={[tw`flex flex-row items-center justify-center w-full p-3 rounded-lg bg-blue-500 bg-opacity-30`, fonts.fontPoppins]}>
              <Text style={[tw`text-white text-base`, fonts.fontPoppins]}>Saving...</Text>
            </View>
          )}
          {!isSubmitting && (
            <React.Fragment>
              <TouchableOpacity
              style={[tw`flex flex-row items-center justify-center w-[10.5rem] p-3 rounded-l-lg bg-blue-500`, fonts.fontPoppins]}
                activeOpacity={0.8}
                onPress={handleSubmit(onSave)}
              >
                <Text style={[tw`text-white text-base`, fonts.fontPoppins]}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[tw`flex flex-row items-center justify-center w-[10.5rem] p-3 rounded-r-lg bg-gray-700`, fonts.fontPoppins]}
                activeOpacity={0.8}
                onPress={() => {
                  reset()
                  setGenderTypeValue('')
                  setStatusTypeValue('')
                }}
              >
                <Text style={[tw`text-white text-base`, fonts.fontPoppins]}>Clear</Text>
              </TouchableOpacity>
            </React.Fragment>
          )}
        </View>
      </View>
    </ScrollView>
  )
}

export default NewContactForm