// import PromptInput from "../components/playground/PromptInput";
// import CodeEditor from "../components/playground/tabs/CodeEditor"
// import Preview from "../components/playground/tabs/Preview"
// import { useState } from "react";

// export default function Playground() {
//   const [code, setCode] = useState("");


//   return (
//     <div className="h-screen flex">

//       <div className="w-1/4 border-r p-4">
//         <PromptInput />
//       </div>

//       <div className="w-2/4 p-4">
//         <Preview />
//       </div>

//       <div className="w-1/4 border-l p-4">
//         <CodeEditor />
//       </div>

//     </div>
//   );
// }

import PromptInput from "../components/playground/PromptInput"
import PreviewTabs from "../components/playground/tabs/PreviewTabs"


export default function Playground() {

  return (
    <div className="h-screen flex bg-black pb-5 pt-5 mx-5 gap-5">

      

      <div className="w-1/3 flex flex-col justify-end">
        <PromptInput border="border-gray-800" />
      </div>

      <div className="flex-1 rounded-2xl">
        <PreviewTabs />
      </div>

    </div>
  )
}