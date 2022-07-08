import React from 'react'
import EditContactForm from '../../components/Forms/EditContactForm'

interface TypedProps {
  contact: any
}

const NewContactLayout: React.FC<TypedProps> = ({ contact }) => {
  return (
    <React.Fragment>
      <EditContactForm contact={contact} />
    </React.Fragment>
  )
}

export default NewContactLayout