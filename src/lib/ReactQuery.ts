import { useQuery, useMutation, useQueryClient } from 'react-query'
import { onlineManager } from 'react-query'
import NetInfo from '@react-native-community/netinfo'
import api from './Axios'

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected)
  })
})

export const useGetContacts = () => {
  return useQuery('contacts',
    async () => {
      const contacts = await api.get('/api/contacts')
      return contacts.data
    },
    {
      refetchInterval: onlineManager.isOnline() ? 1000 : false,
      retry: 3,
      retryDelay: 2000
    }
  )
}


export const useStoreContact = () => {
  const queryClient = useQueryClient()
  return useMutation((_args: { name: string, phone: string, address: string, gender: string, status: string }) =>
    api.post('/api/create-contact', {
      name: _args.name,
      phone: _args.phone,
      address: _args.address,
      gender: _args.gender,
      status: _args.status
    }),
    {
      onSettled: () => {
        queryClient.invalidateQueries('contacts')
      }
    }
  )
}

export const useUpdateContact = () => {
  const queryClient = useQueryClient()
  return useMutation((_args: { id: string, name: string, phone: string, address: string, gender: string, status: string }) =>
    api.put(`/api/update-contact/${String(_args.id)}`, {
      name: _args.name,
      phone: _args.phone,
      address: _args.address,
      gender: _args.gender,
      status: _args.status
    }),
    {
      onSettled: () => {
        queryClient.invalidateQueries('contacts')
      }
    }
  )
}

export const useDeleteContact = () => {
  const queryClient = useQueryClient()
  return useMutation((_args: { id: string }) =>
    api.delete(`/api/delete-contact/${String(_args.id)}`),
    {
      onSettled: () => {
        queryClient.invalidateQueries('contacts')
      }
    }
  )
}