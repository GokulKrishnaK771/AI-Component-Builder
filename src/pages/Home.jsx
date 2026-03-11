import { useSelector } from "react-redux"
import PromptInput from "../components/playground/PromptInput"
import PreviewTabs from "../components/playground/tabs/PreviewTabs"
// import ChatMessages from "../components/ChatMessages"

export default function Home() {

  const builderOpen = useSelector(state => state.playground.builderOpen)

  if (!builderOpen) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white">

        <h1 className="text-4xl mb-8 font-mono">
          What do you want to create?
        </h1>

        <div className="w-[600px]">
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