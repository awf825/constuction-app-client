import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface UserState {
    accessToken: string
}

const initialState: UserState = {
    accessToken: ""
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      login: (state, action: PayloadAction<string>) => {
        state.accessToken = action.payload
      },
      logout: (state) => {
        state.accessToken = ""
      }
    },
})

export const { login, logout } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer