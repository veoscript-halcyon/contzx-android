import React from 'react'
import MainLayout from '../layouts/MainLayout'
import HomeLayout from '../layouts/PageLayout/HomeLayout'
import NavBar from '../components/NavBar'

interface NavigationProps {
  navigation: any
}

const HomeScreen: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <MainLayout>
      <NavBar
        title="Contzx"
        subtitle="Public Contacts"
        navigation={navigation}
      />
      <HomeLayout navigation={navigation} />
    </MainLayout>
  )
}

export default HomeScreen