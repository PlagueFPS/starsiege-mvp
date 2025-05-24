import React from 'react'

export default function NewsCardLoader() {
  return (
    <div className='relative bg-zinc-800 max-w-sm h-[450px] border-y-4 border-secondary border-x-4 border-x-zinc-800 animate-pulse
  after:h-6 after:w-6 after:bg-primary after:absolute after:-top-[13px] after:-right-[13px] after:border-b-4 after:border-secondary after:rotate-45
  before:h-6 before:w-6 before:bg-primary before:absolute before:-top-[13px] before:-left-[13px] before:border-b-4 before:border-secondary before:-rotate-45
  transition-all' />
  )
}
