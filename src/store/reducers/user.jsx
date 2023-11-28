import { createSlice } from '@reduxjs/toolkit'

const initialTokens = {
    access_token: '',
    refresh_token: ''
}

const initialState = {
    uuid: null,
    email: '',
    tokens: initialTokens,
    itin: null,

}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        _setUser: (state, action) => {
            const { uuid, email, tokens, itin } = action.payload
            state.uuid = uuid
            state.email = email
            state.tokens = tokens
            state.itin=itin
        },

        _setInformations: (state, action) => {
            const { email, company_name } = action.payload
            state.email = email
            state.company_id = company_name

        },

        _setTokens: (state, action) => {
            state.tokens = action.payload
        },

        _logOut: (state) => {
            state.userid = null
            state.email = ''
            state.usertype = ''
            state.company_id = null
            state.tokens = initialTokens
        }
    }
})

export const { _setUser, _setInformations, _setTokens, _logOut } = user.actions
export default user.reducer
