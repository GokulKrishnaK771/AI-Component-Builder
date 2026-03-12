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
import ChatMessages from "../components/playground/chats/ChatMessages"


export default function Playground() {

  return (
    <div className="h-screen flex bg-black pb-5 pt-5 mx-5 gap-5">



      <div className=" w-full md:max-w-3xl max-w-l rounded-xl border border-neutral-700 focus-within:border-neutral-500 p-3 flex flex-col gap-3 justify-end">
        <div className="flex flex-col h-full justify-end">
          <ChatMessages />
          <PromptInput />
        </div>
      </div>

      <div className="flex-1 rounded-2xl">
        <PreviewTabs />
      </div>

    </div>
  )
}