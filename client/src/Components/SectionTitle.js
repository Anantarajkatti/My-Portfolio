import React from 'react'

function SectionTitle({title}) {
  return (
    <div className='flex gap-10 items-center py-10 mt-5 '>
        <h1 className='text-4xl text-tertiary font-semibold '>{title}</h1>
       < div className="w-60 h-[1px] bg-tertiary"></div>
    </div>
  )
}

export default SectionTitle