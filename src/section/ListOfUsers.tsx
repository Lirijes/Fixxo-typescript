import React from 'react'
import CreateForm from '../components/CreateForm'
import UserList from '../components/UserList'
import UserProvider from '../contexts/UserContext'

const ListOfUsers: React.FC = () => {
  return (
    <UserProvider>
        <CreateForm />
        <hr className="my-5" />
        <UserList />
    </UserProvider>
  )
}

export default ListOfUsers