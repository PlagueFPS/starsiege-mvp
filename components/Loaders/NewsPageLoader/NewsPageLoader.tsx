import NewsLoader from '../NewsLoader/NewsLoader'

export default function NewsPageLoader() {
  return (
    <>
      <div className='relative top-0 -left-2 w-full md:max-w-[65.2%] mx-auto mt-8 z-10 h-20 p-4'>
        <div className='flex h-10 border border-secondary bg-primary rounded-md w-full max-w-[180px] max-h-12 transition-all animate-pulse' />
      </div>
      <NewsLoader button />
    </>
  )
}
