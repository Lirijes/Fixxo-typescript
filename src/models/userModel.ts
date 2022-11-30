export interface User {
    id: number
    firstName: string
    lastName: string
    email: string
}

export interface UserNew {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface UserSignIn {
    email: string
    password: string
}