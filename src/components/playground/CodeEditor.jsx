import Editor from "@monaco-editor/React";
import {useSelector, useDispatch} from 'react-redux';
import { setCode } from "../../features/playground/playgroundslice";



const CodeEditor = () => {

    const dispatch = useDispatch();

    const code = useSelector((state)=>state.playground.code);

    const handleCodeChange = (value)=>{
        dispatch(setCode(value))
    }

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

