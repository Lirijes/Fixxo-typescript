import React, { useState, useContext, createContext } from 'react'
import { User, UserNew, UserSignIn } from '../models/userModel'

interface IUserProviderProps {
    children: any
}

export interface IUserContext {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
    UserNew: UserNew
    setUserNew: React.Dispatch<React.SetStateAction<UserNew>>
    users: User []
    create: (e: React.FormEvent) => void
    get: (id: number) => void
    getAll: () => void
    update:(id: number, e: React.FormEvent) => void
    remove: (id: number) => void
}


export const UserContext = createContext<IUserContext | null>(null)

export const useUserContext = () => { 
    return useContext(UserContext) 
}

const UserProvider = ({children} : IUserProviderProps) => {
    const baseUrl = 'http://localhost:5002/api/users'
    const defaultUserValues: User = {
        id: 0,
        firstName: '',
        lastName: '',
        email: ''
    }

    const defaultUserNewValues: UserNew = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    const [user, setUser] = useState<User>(defaultUserValues)
    const [UserNew, setUserNew] = useState<UserNew>(defaultUserNewValues)
    const [users, setUsers] = useState<User[]>([])

  
    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UserNew) 
        })
        
        if (result.status === 201)
            setUserNew(defaultUserNewValues)
    }

    const get = async (id: number) => {
        const result = await fetch(`${baseUrl}/${id}`)
        if (result.status === 200)
            setUser(await result.json())
    }

    const getAll = async () => {
        const result = await fetch(`${baseUrl}`)
        if (result.status === 200)
            setUsers(await result.json())
    }

    const update = async (id: number, e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user) 
        })
        
        if (result.status === 201)
            setUser(await result.json())
    }

    const remove = async (id: number) => {
        const result = await fetch(`${baseUrl}/${id}`, {
            method: 'delete'
        })
        
        if (result.status === 204)
            setUser(defaultUserValues)
    }
  
    return (
    <UserContext.Provider value={{ user, setUser, UserNew, setUserNew, users, create, get, getAll, update, remove }}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider