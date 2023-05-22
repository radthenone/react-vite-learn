import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserStateValue {
    username: string,
    age: number,
    email: string,
    password: string,
}

interface UserState {
    value: UserStateValue
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            username: "",
            age: 0,
            email: "",
            password: "",
        }
    } as UserState,
    reducers: {
        login: (state: UserState, action: PayloadAction<Partial<UserStateValue>>) => {
            state.value.username = action.payload.username || "";
            state.value.age = action.payload.age || 0;
            state.value.email = action.payload.email || "";
            state.value.password = action.payload.password || "";
        },
        logout: (state: UserState) => {
            state.value = {
                username: "",
                age: 0,
                email: "",
                password: "",
            }
        }
    }
})

export const { login, logout } = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})