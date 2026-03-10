import { useMemo } from "react";
import { useSelector } from "react-redux"

export default function Preview() {

    const code = useSelector((state) => state.playground.code)


    if (!code) {
        return (
            <div className="w-full h-full border flex items-center justify-center p-4">
                <p className="text-gray-400">Waiting for code to preview...</p>
            </div>
        )
    }

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

    cleanCode = cleanCode.replace(/`/g, "\\`");

    
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
            }
        </style>
        </head>

        <body>
        <div id="root"></div>

        <script>
            window.React = React;
            window.ReactDOM = ReactDOM;
        </script>

        <script type="text/babel">

            try {

            ${cleanCode}

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

                root.render(React.createElement(App))

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
  `
  },[code])

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