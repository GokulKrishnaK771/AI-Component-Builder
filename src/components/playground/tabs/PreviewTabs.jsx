import { useState } from "react"
import Preview from "./Preview"
import CodeEditor from "./CodeEditor"

export default function PreviewTabs() {

    const [tab, setTab] = useState("preview")

    return (
        <div className="h-full flex flex-col">

            <div className="flex border-b">

                <button
                    className={`px-4 py-2 ${tab === "preview" ? "border-b-2 border-black" : ""
                        }`}
                    onClick={() => setTab("preview")}
                >
                    Preview
                </button>

                <button
                    className={`px-4 py-2 ${tab === "code" ? "border-b-2 border-black" : ""
                        }`}
                    onClick={() => setTab("code")}
                >
                    Code
                </button>

            </div>

            <div className="flex-1 relative">

                <div className={tab === "preview" ? "h-full block" : "hidden"}>
                    <Preview />
                </div>

                <div className={tab === "code" ? "h-full block" : "hidden"}>
                    <CodeEditor />
                </div>

            </div>

        </div>
    )
}