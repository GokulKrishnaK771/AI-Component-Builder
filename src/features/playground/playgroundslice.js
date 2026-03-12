import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    prompt: "",
    code: "",
    builderOpen: false,
    messages: []
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
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload)
        },
        updateLastMessage: (state, action) => {
            const last = state.messages[state.messages.length - 1]

            if (last && last.role === "assistant") {
                last.content = action.payload
            }
        }

    }
})

export const { setPrompt, setCode, openBuilder, addMessage, updateLastMessage } = playgorundslice.actions

export default playgorundslice.reducer