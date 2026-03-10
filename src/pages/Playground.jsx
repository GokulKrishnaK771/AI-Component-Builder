import PromptInput from "../components/playground/PromptInput";
import CodeEditor from "../components/playground/CodeEditor"
import Preview from "../components/playground/Preview"
import { useState } from "react";

export default function Playground() {
  const [code, setCode] = useState("");


  return (
    <div className="h-screen flex">

      <div className="w-1/4 border-r p-4">
        <PromptInput />
      </div>

      <div className="w-2/4 p-4">
        <Preview />
      </div>

      <div className="w-1/4 border-l p-4">
        <CodeEditor />
      </div>

    </div>
  );
}