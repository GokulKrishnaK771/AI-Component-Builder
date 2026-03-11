import { useSelector, useDispatch } from "react-redux"
import { setPrompt, openBuilder } from "../../features/playground/playgroundslice"
import { generateComponent } from "../../features/ai/aislice"

const PromptInput = () => {

    const loading = useSelector((state) => state.ai.loading)
    const prompt = useSelector((state) => state.playground.prompt)
    const builderOpen = useSelector((state) => state.playground.builderOpen)

    const dispatch = useDispatch()

    const handlePrompt = (e) => {
        dispatch(setPrompt(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!prompt.trim()) return

        dispatch(openBuilder())
        dispatch(generateComponent(prompt))
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className={`${builderOpen ? "h-50 text-sm" : "h-60 text-lg"} relative w-full max-w-3xl mx-auto  rounded-xl border border-neutral-700
                focus-within:border-neutral-500 p-3`}
            >
                <textarea
                    className="w-full resize-none  pb-20
                    min-h-[80px] max-h-[200px]
                    overflow-y-auto
                    transition-all duration-500
                    outline-none focus:outline-none focus:ring-0"
                    placeholder="Describe a UI component..."
                    value={prompt}
                    onChange={handlePrompt}
                />

                <button
                    type="submit"
                    className="absolute bottom-3 right-3 border px-4 py-2 rounded-lg bg-white text-black font-mono"
                >
                    {loading ? "Generating..." : "Generate UI"}
                </button>
            </form>

        </>

    )
}

export default PromptInput