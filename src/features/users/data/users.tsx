import axios from "axios"

interface User {
    id: number,
    username: string,
    age: number,
    email: string,
    password: string
}

const baseURL = "http://localhost:3001"

export const userCreate = async ({username, age, email, password, confirmPassword } : {username: string, age: number, email: string, password: string, confirmPassword: string}) => {
    try {
        if (password !== confirmPassword) {
            throw new Error("Passwords not match")
        }
        const response = await axios.post(`${baseURL}/users/`, {
            username,
            age,
            email,
            password,
        })
        return response.data
    }
    catch (error) {
        throw new Error('Failed to create user')
    }
}

export const getUserByEmail = async ({email}: {email: string}) => {
    try {
        const response = await axios.get(`${baseURL}/users`)
        const users = response.data
        const user = users.find((user: User) => user.email === email)
        if (user) {
            return user
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        throw new Error("Wrong email")
    }
}

export const getUserByUsername = async ({username}: {username: string}) => {
    try {
        const response = await axios.get(`${baseURL}?username=${username}`)
        return response.data
    }
    catch (error) {
        throw new Error("User not found")
    }
}
//
// export const userToken = async ({email, password } : {email: string, password: string}) => {
//     try {
//         const token = await  axios.post(`${baseURL}/token/`, {
//             email.
//             password
//         },{
//             headers: {
//                 'Content-Type':'application/json'
//             }
//         })
//     }
//     catch (error) {
//         throw new Error('Failed to create token')
//     }
// }