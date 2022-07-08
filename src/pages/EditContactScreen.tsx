import React from 'react'
import MainLayout from '../layouts/MainLayout'
import EditContactLayout from '../layouts/PageLayout/EditContactLayout'
import NavBar from '../components/NavBar'

interface NavigationProps {
  navigation: any
  route: any
}

const EditContactScreen: React.FC<NavigationProps> = ({ navigation, route }) => {
  return (
    <MainLayout>
      <NavBar
        title="Contzx"
        subtitle="Edit Contact"
        navigation={navigation}
      />
      <EditContactLayout
        contact={route.params}
      />
    </MainLayout>
  )
}

export default EditContactScreen