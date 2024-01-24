import React, { useEffect, useState } from 'react'
import SearchItem from '../SearchItem/Index'
import Item from '../Item'

export default function Left() {
    const [categories, setCategories] = useState();
    const [filteredCartegories, setFilteredCartegories] = useState();

    const getData = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const jsoData = await data.json();

        setCategories(jsoData.categories);
    }

    useEffect(() => {

        getData();
    }, [])

    const search = (e) => {
        let searchValue = e.target.value.toLowerCase()
        
        if( searchValue != ''){
           const filtered =  categories.filter(category => category.strCategory.includes(searchValue));
           setFilteredCartegories(filtered)
        }else{
            setFilteredCartegories(null);
        }

    }

    return (
        <div className='w-full min-h-screen dark:bg-gray-900 md:w-80 bg-blue-400'>
            <div className='w-full md:h-1/2 p-4 overflow-hidden flex flex-col gap-5'>
                <SearchItem 
                     search = {search}
                />
                <ul className='py-5 pl-2 dark:text-gray-300 text-lg overflow-hidden hover:overflow-y-scroll flex-grow flex flex-col gap-5 px-5'>
                    {
                        filteredCartegories && filteredCartegories.map(category =>

                            <Item
                                img={category.strCategoryThumb}
                                title={category.strCategory}
                            />

                        )

                    }


                </ul>
            </div>

            

        </div>
    )
}
