export default function NewsPostLoader() {
  return (
    <div className="flex flex-col gap-2 p-4 max-w-[80ch] mx-auto justify-center items-center">
      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <div className="bg-secondary h-8 rounded-lg w-1/2 animate-pulse" />
        <div className="bg-zinc-400 h-4 rounded-lg w-1/3 animate-pulse" />
      </div>
      <div className="bg-zinc-800 h-screen rounded-lg p-8 w-full animate-pulse" />
    </div>
  )
}
