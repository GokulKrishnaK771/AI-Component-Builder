import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    generatedCode: "",
    error: null
}

const aislice = createSlice({
    name: "ai",
    initialState,
    reducers: {

        setGeneratedCode: (state, action) => {
            state.generatedCode = action.payload
        },

        setLoading: (state, action) => {
            state.loading = action.payload
        }

    }
})

export default aislice.reducer

export const { setGeneratedCode, setLoading } = aislice.actions