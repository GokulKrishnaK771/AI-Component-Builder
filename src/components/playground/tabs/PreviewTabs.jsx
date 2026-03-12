import { Eye, Code2, Copy, Check } from "lucide-react"
import { useState } from "react"
import Preview from "./Preview"
import CodeEditor from "./CodeEditor"
import { useSelector } from "react-redux"


export default function PreviewTabs() {

    const [tab, setTab] = useState("preview")
    const code = useSelector((state) => state.playground.code)

    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code)

        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }

    return (

        <div className="h-full flex flex-col border border-neutral-700 rounded-2xl overflow-hidden relative">

            {/* Safari Toolbar */}
            <div className="flex items-center px-4 h-10 bg-zinc-900 border-b border-zinc-800">

                {/* Traffic Lights */}
                <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>

                {/* Address bar */}
                <div className="flex-1 flex justify-center">
                    <div className="bg-zinc-800 text-zinc-400 text-xs px-4 py-1 rounded-md">
                        preview.component
                    </div>
                </div>
                {/* Toggle */}
                <div className="flex justify-end gap-5">
                    <div className="flex bg-gray-950 border border-neutral-700 rounded-lg w-fit">

                        <button
                            onClick={() => setTab("preview")}
                            className={`p-1 rounded-md transition-all
                            ${tab === "preview"
                                    ? "bg-amber-600 text-white"
                                    : "text-neutral-700"
                                }`}
                        >
                            <Eye size={16} />
                        </button>

                        <button
                            onClick={() => setTab("code")}
                            className={`p-1 rounded-md transition-all
                                ${tab === "code"
                                    ? "bg-amber-600 text-white"
                                    : "text-neutral-700"
                                }`}
                        >
                            <Code2 size={16} />
                        </button>

                    </div>

                    {tab === "code" && (
                        <button
                            onClick={handleCopy}
                            className="text-neutral-400 hover:text-white transition-opacity duration-150"
                        >
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                    )}
                </div>
            </div>



            {/* Content */}
            <div className="flex-1 relative">

                <div className={tab === "preview" ? "block h-full" : "hidden"}>
                    <Preview />
                </div>

                <div className={tab === "code" ? "block h-full" : "hidden"}>
                    <CodeEditor />
                </div>

            </div>

        </div>
    )
}