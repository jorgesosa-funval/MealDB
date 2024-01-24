import React from 'react'

export default function SearchItem({search}) {
  return (
    <div>

        <input type="text"  className='w-full h-9 outline-none shadow-md rounded-md dark:bg-gray-700 px-4 dark:text-gray-200' onChange={search}/>

            
    </div>
  )
}
