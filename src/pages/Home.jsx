import { useSelector } from "react-redux"
import PromptInput from "../components/playground/PromptInput"
import PreviewTabs from "../components/playground/tabs/PreviewTabs"
// import ChatMessages from "../components/ChatMessages"

export default function Home() {

  const builderOpen = useSelector(state => state.playground.builderOpen)

  if (!builderOpen) {
    return (

      
      <div className="relative h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">

      {/* Background gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none"
        style={{
          backgroundImage: "url(/bottom-gradient.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom"
        }}
      />

      <h1 className="sm:text-4xl text-2xl mb-8 font-mono text-center z-10">
        What do you want to create?
      </h1>

      <div className="w-full max-w-xl px-4 z-10">
        <PromptInput />
      </div>

    </div>
    )
  }

  return (
    <div className="h-screen flex bg-black text-white">

      <div className="w-[500px] flex flex-col bottom-0 mx-5 ">
        {/* <ChatMessages /> */}
        <PromptInput/>
      </div>

      <div className="flex-1">
        <PreviewTabs />
      </div>

    </div>
  )
}