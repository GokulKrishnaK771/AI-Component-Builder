const WebMockup = ({ children }) => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-xl">

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

      </div>

      {/* Content */}
      <div className="h-[calc(100%-40px)] bg-white">
        {children}
      </div>

    </div>
  )
}

export default WebMockup