import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    prompt: "",
    code: "",
    builderOpen: false
}

const playgorundslice = createSlice({
    name: "playground",
    initialState,
    reducers: {
        setPrompt: (state, action) => {
            state.prompt = action.payload
        },
        setCode: (state, action) => {
            state.code = action.payload
        },
        openBuilder: (state) => {
            state.builderOpen = true
        }
    }
})

export const { setPrompt, setCode, openBuilder } = playgorundslice.actions

export default playgorundslice.reducer