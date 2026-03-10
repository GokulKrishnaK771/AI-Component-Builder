import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { generateComponentFromAI } from '../../services/aiService';
import { setCode } from "../playground/playgroundslice"

export const generateComponent = createAsyncThunk("ai/generateComponent",
    async (prompt, { dispatch }) => {
        const result = await generateComponentFromAI(prompt)
        dispatch(setCode(result))
        return result
    })

const initialState = {
    loading: false,
    generatedCode: "",
    error: null
}

const aislice = createSlice({
    name: "ai",
    initialState,
    reducers: {

        // setGeneratedCode: (state, action) => {
        //     state.generatedCode = action.payload
        // },

        // setLoading: (state, action) => {
        //     state.loading = action.payload
        // }

    },
    extraReducers: (builder) => {

    builder
      .addCase(generateComponent.pending, (state) => {
        state.loading = true
      })

      .addCase(generateComponent.fulfilled, (state, action) => {
        state.loading = false
        state.generatedCode = action.payload
      })

      .addCase(generateComponent.rejected, (state) => {
        state.loading = false
        state.error = "Failed to generate component"
      })
  }
})

export default aislice.reducer

// export const { setGeneratedCode, setLoading } = aislice.actions