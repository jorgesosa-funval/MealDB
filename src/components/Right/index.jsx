import React, { useEffect, useState } from 'react'
import RecipeCard from '../RecipeCard'
import SearchItem from '../SearchItem/Index'

export default function Right({ }) {
    const [theme, setTheme] = useState();
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])
    useEffect(() => {


        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])
    
    const toggle = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
    return (
        <div className='min-h-screen bg-blue-200 w-full dark:bg-gray-800  md:min-w-[320px] md:w-[calc(100%-320px)] '>
            <button onClick={toggle} className='px-10 py-2 bg-slate-900 text-gray-200 dark:bg-blue-300 dark:text-slate-900 ml-5 rounded-md hover:bg-slate-800'>
                Dark Mode
            </button>
            <div className='p-6 flex md:w-4/5   gap-5 justify-center '>
                <SearchItem />
                <button className='bg-blue-600 px-4 rounded-md font-bold hover:bg-blue-500 active:bg-blue-700 text-gray-800'>
                    Icon
                </button>
            </div>
            <ul className='flex p-10 gap-8 mx-auto w-4/5 flex-wrap px-10 justify-center'>
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </ul>

            <div className='flex flex-col items-center px-20 dark:text-gray-200 '>
                <h2 className='text-2xl dark:text-gray-300 font-bold'>Titulo Receta</h2>

                <div className='flex w-full gap-5 py-2 flex-col md:flex-row md:flex-wrap items-center'>

                    <div className='gap-y-5 md:w-full items-center md:flex md:justify-evenly'>

                        <div className='w-40 h-40 bg-blue-700  shrink-0  '>
                            <img src="" alt="" width="full" />
                        </div>

                        <aside className='w-full md:w-fit flex flex-col   mt-4'>
                            <h2>Ingredientes</h2>
                            <ul className='flex flex-col justify-end'>
                                <li>Medida + Ingrediente</li>
                                <li>Medida + Ingrediente</li>
                                <li>Medida + Ingrediente</li>
                                <li>Medida + Ingrediente</li>
                                <li>Medida + Ingrediente</li>

                            </ul>
                        </aside>
                    </div>
                    <article className='w-full  py-3 flex gap-5 justify-center'>

                        <div className='w-3/4 text-justify'>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam aut eius velit nesciunt corrupti laborum dignissimos veritatis fugiat voluptate delectus, ipsam voluptatum vitae earum illum quibusdam odit eum aliquid.</p>

                        </div>


                    </article>


                </div>


            </div>
        </div>
    )
}
