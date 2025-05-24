export default function FAQLoader() {
  return (
    <>
      { [...Array(8).keys()].map((i) => (
        <div key={ i } className="flex flex-col w-full bg-zinc-800 gap-2 p-4 rounded-lg h-32 shadow-md shadow-secondary animate-pulse">
          <h2 className="text-lg lg:text-xl h-5 font-semibold border-b border-gray-600 pb-2 text-secondary"></h2>
        </div>
      )) }
    </>
  )
}