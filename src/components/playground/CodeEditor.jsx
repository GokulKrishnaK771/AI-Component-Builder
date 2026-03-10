import Editor from "@monaco-editor/React";
import {useSelector, useDispatch} from 'react-redux';
import { setCode } from "../../features/playground/playgroundslice";
import { useEffect } from "react";



const CodeEditor = () => {

    const dispatch = useDispatch();

    const code = useSelector((state)=>state.playground.code);
    const generatedCode = useSelector((state) => state.ai.generatedCode)

    const handleCodeChange = (value)=>{
        dispatch(setCode(value))
    }

    useEffect(()=>{
        if(generatedCode){
            dispatch(setCode(generatedCode))
        }
    },[generatedCode])

  return (
    <Editor
        height="100vh"
        language="javascript"
        value={code}
        onChange={handleCodeChange}
    ></Editor>
  )
}

export default CodeEditor

