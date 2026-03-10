import { useSelector, useDispatch } from 'react-redux'
import { setPrompt } from '../../features/playground/playgroundslice'

const PromptInput = () => {

    const dispatch = useDispatch()

    const prompt = useSelector((state) => state.playground.prompt)

    const handlePrompt = (e) => {
        dispatch(setPrompt(e.target.value))
    }

    const handleGenerate = () => {
        console.log(prompt)
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
                Generate UI
            </button>
        </div>
    )
}

export default PromptInput