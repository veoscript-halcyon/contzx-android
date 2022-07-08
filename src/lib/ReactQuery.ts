import { useQuery, useMutation, useQueryClient } from 'react-query'
import api from './Axios'

export const useGetContacts = () => {
  return useQuery('contacts',
    async () => {
      const contacts = await api.get('/api/contacts')
      return contacts.data
    },
    {
      refetchInterval: 1000
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