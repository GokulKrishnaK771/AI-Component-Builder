import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    prompt: "",
    code: ""
}

const  playgorundslice = createSlice({
    name: "playground",
    initialState,
    reducers: {
        setPrompt: (state,action)=>{
            state.prompt = action.payload
        }
    }
})

export const { setPrompt } = playgorundslice.actions

export default playgorundslice.reducer