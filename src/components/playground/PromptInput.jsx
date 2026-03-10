import { useSelector, useDispatch } from 'react-redux'
import { setPrompt } from '../../features/playground/playgroundslice'
import { generateComponent } from '../../features/ai/aislice'

const PromptInput = () => {

    const loading = useSelector((state) => state.ai.loading)

    const dispatch = useDispatch()

    const prompt = useSelector((state) => state.playground.prompt)

    const handlePrompt = (e) => {
        dispatch(setPrompt(e.target.value))
    }

    const handleGenerate = () => {
        dispatch(generateComponent(prompt))
    }
    return (
        <div>
            <textarea
                className="w-full border p-2 h-40 resize-none"
                placeholder="Describe a UI component..."
                type="text"
                value={prompt}
                onChange={handlePrompt}
            />

            <button
                onClick={handleGenerate}
                className="border p-2"
            >
                {loading? "Generating" : "Generate UI"}
            </button>
        </div>
    )
}

export default PromptInput