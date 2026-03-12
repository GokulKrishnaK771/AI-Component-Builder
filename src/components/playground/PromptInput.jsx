import { useSelector, useDispatch } from "react-redux"
import { setPrompt, openBuilder } from "../../features/playground/playgroundslice"
import { generateComponent } from "../../features/ai/aislice"
import { Fragment, useRef } from "react"
import { addMessage } from "../../features/playground/playgroundslice"

const PromptInput = () => {

    const loading = useSelector((state) => state.ai.loading)
    const prompt = useSelector((state) => state.playground.prompt)
    const builderOpen = useSelector((state) => state.playground.builderOpen)
    const textareaRef = useRef(null)

    const dispatch = useDispatch()

    const handlePrompt = (e) => {
        dispatch(setPrompt(e.target.value))
        const el = textareaRef.current
        if (!el) return
        el.style.height = "auto";
        el.style.height = Math.min(el.scrollHeight, 200) + "px";
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!prompt.trim()) return

        dispatch(openBuilder())
        dispatch(addMessage({
            role: "user",
            content: prompt
        }))
        
        dispatch(setPrompt(""))
        dispatch(addMessage({
            role: "assistant",
            content: "Thinking..."
        }))
        dispatch(generateComponent(prompt))
    }

    return (
        <Fragment className="mx-auto">
            <form
                onSubmit={handleSubmit}
                className="relative w-full md:max-w-3xl max-w-l rounded-xl border border-neutral-700 focus-within:border-neutral-500 p-3 flex flex-col gap-3"
            >

                <textarea
                    ref={textareaRef}
                    rows={4}
                    className="w-full resize-none min-h-[40px] max-h-[200px] overflow-y-auto outline-none"
                    placeholder="Describe a UI component..."
                    value={prompt}
                    onChange={handlePrompt}
                />

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className=" px-4 py-2 rounded-lg bg-amber-600 text-white font-mono"
                    >
                        {loading ? "Generating..." : "Generate"}
                    </button>
                </div>

            </form>

        </Fragment>

    )
}

export default PromptInput