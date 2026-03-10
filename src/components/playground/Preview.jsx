import { useSelector } from "react-redux"

export default function Preview() {

  const code = useSelector((state) => state.playground.code)

  const html = `
  <html>
  <body>
  <div id="root"></div>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
  ${code}
  </script>
  </body>
  </html>
  `

  return (
    <iframe
      srcDoc={html}
      title="preview"
      className="w-full h-full border"
    />
  )
}