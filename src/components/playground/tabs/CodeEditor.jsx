import Editor from "@monaco-editor/react";
import { useSelector, useDispatch } from 'react-redux';
import { setCode } from "../../../features/playground/playgroundslice";
// import { useEffect } from "react";



const CodeEditor = () => {

    const dispatch = useDispatch();

    const code = useSelector((state) => state.playground.code);
    const generatedCode = useSelector((state) => state.ai.generatedCode)

    const handleCodeChange = (value) => {
        dispatch(setCode(value))
    }

    // useEffect(() => {
    //     if (generatedCode) {
    //         dispatch(setCode(generatedCode))
    //     }
    // }, [generatedCode])

    return (
        <Editor
            className="font-mono"
            height="100%"
            defaultLanguage="javascript"
            value={code}
            onChange={(value) => dispatch(setCode(value))}
            theme="vs-dark"
            options={{
                minimap: { enabled: false },
                fontSize: 15,
                lineNumbers: "on",
                roundedSelection: true,
                cursorStyle: "line",
                lineHeight: 22,
                tabSize: 2,
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                cursorBlinking: "smooth",
                cursorSmoothCaretAnimation: "on",
                padding: { top: 16 },
                automaticLayout: true,
                wordWrap: "on",        // ⭐ enables multi-line wrapping
                wordWrapColumn: 80,    // optional wrap column
                wrappingIndent: "indent" // keeps indentation nice
            }}
        />
    )
}

export default CodeEditor

