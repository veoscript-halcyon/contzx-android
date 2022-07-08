import React from 'react'
import MainLayout from '../layouts/MainLayout'
import NewContactLayout from '../layouts/PageLayout/NewContactLayout'
import NavBar from '../components/NavBar'

interface NavigationProps {
  navigation: any
}

const NewContactScreen: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <MainLayout>
      <NavBar
        title="Contzx"
        subtitle="New Contact"
        navigation={navigation}
      />
      <NewContactLayout />
    </MainLayout>
  )
}

export default NewContactScreen