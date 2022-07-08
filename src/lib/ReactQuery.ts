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