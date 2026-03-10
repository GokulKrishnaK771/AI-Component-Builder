import { Link } from "react-router-dom"

export default function Home() {

  return (
    <div className="h-screen flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold mb-4">
        AI UI Playground
      </h1>

      <p className="text-gray-600 mb-6">
        Generate React UI components with AI
      </p>

      <Link
        to="/playground"
        className="bg-black text-white px-6 py-3 rounded"
      >
        Open Playground
      </Link>

    </div>
  )
}