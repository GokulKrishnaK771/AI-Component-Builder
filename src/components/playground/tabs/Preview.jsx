import { useMemo } from "react";
import { useSelector } from "react-redux"

export default function Preview() {

    const code = useSelector((state) => state.playground.code)

    const html = useMemo(()=>{
    // Simple cleanup to handle accidental markdown or exports
    let cleanCode = code
        .replace(/```jsx\n?/gi, "")
        .replace(/```javascript\n?/gi, "")
        .replace(/```\n?/g, "")
        .replace(/import\s+.*?from\s+['"].*?['"];?/g, "")
        .trim();

    // Handle various export styles
    cleanCode = cleanCode
        .replace(/export default function\s+(\w+)/g, "function App")
        .replace(/export default\s+(\w+);?/g, "const App = $1;")

    // If the AI just returned raw JSX tags without a component wrapper, wrap it
    if (
        !cleanCode.includes("function ") &&
        !cleanCode.includes("const ") &&
        cleanCode.startsWith("<")) {
        cleanCode = `function App() {\n  return (\n    ${cleanCode}\n  );\n}`;
    }

    // The raw AI code is passed seamlessly via interpolating it at runtime
    // We convert it to a safe string literal to extract the props statically
    const scriptTag = "</" + "script>";
    const safeCode = cleanCode.split(scriptTag).join("<\\/script>");
    const rawCodeScript = "window.__rawCode = " + JSON.stringify(cleanCode).split(scriptTag).join("<\\/script>") + ";";

    
        return `
    <html>
        <head>
        <script src="https://cdn.tailwindcss.com"></script>

        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

        <style>
            body {
            margin:0;
            font-family: system-ui, sans-serif;
            padding:16px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100dvh;
            }
        </style>
        </head>

        <body>
        <div id="root"></div>

        <script>
            window.React = React;
            window.ReactDOM = ReactDOM;
            ` + rawCodeScript + `
        </script>

        <script type="text/babel">

            try {

            const { useState, useEffect, useCallback, useMemo, useRef, useReducer, useContext } = React;

            ` + safeCode + `

            const rootElement = document.getElementById("root")
            const root = ReactDOM.createRoot(rootElement)

            if (typeof App === "undefined") {

                root.render(
                React.createElement(
                    "p",
                    { style: { color: "red" } },
                    "Error: Component must export default."
                )
                )

            } else {

                // React discards Proxies when generating createElement props.
                // We statically intercept expected callback props from the code string instead.
                const mockProps = {};
                const sourceCode = window.__rawCode || "";
                const propMatches = sourceCode.match(/on[A-Z]\\w+/g) || [];
                propMatches.forEach(prop => {
                    mockProps[prop] = function() {};
                });

                root.render(React.createElement(App, mockProps))

            }

            } catch(e) {

            document.getElementById("root").innerHTML =
                "<p style='color:red;font-family:sans-serif;padding:10px;'>Error rendering component: "
                + e.message +
                "</p>"

            }

        </script>

        </body>
     </html>
  `;
  },[code])

    if (!code) {
        return (
            <div className="w-full h-full border flex items-center justify-center p-4">
                <p className="text-gray-400">Waiting for code to preview...</p>
            </div>
        )
    }

    return (
        <iframe
            srcDoc={html}
            title="preview"
            loading="lazy"
            sandbox="allow-scripts"
            className="w-full h-full border"
        />
    )
}