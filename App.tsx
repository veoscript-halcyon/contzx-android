import React from 'react'
import HomeScreen from './src/pages/HomeScreen'
import NewContactScreen from './src/pages/NewContactScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <StatusBar
            animated={true}
            backgroundColor="#2f313e"
            barStyle="light-content"
          />
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewContact"
              component={NewContactScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </React.Fragment>
  )
}

export default App