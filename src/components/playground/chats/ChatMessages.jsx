import { useSelector } from "react-redux"

export default function ChatMessages() {

  const messages = useSelector((state) => state.playground.messages)

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">

      {messages.map((msg, index) => (

        <div
          key={index}
          className={`p-3 rounded-lg max-w-md ${
            msg.role === "user"
              ? "bg-zinc-800 text-white ml-auto"
              : "text-zinc-400"
          }`}
        >
          {msg.content}
        </div>

      ))}

    </div>
  )
}