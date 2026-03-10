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
        },
        setCode: (state, action)=>{
            state.code = action.payload
        }
    }
})

export const { setPrompt, setCode } = playgorundslice.actions

export default playgorundslice.reducer