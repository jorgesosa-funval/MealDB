import React from 'react'

export default function Item({ img, title }) {
    return (
        <li className='flex items-center gap-5 rounded-md cursor-pointer px-2 hover:bg-slate-700 flex-shrink-0'>
            <div className='w-12 h-12 '>
                <img src={img} alt={title} className='w-full h-full'/>
            </div>
            <h2>{title}</h2>
        </li>
    )
}
