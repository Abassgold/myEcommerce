import React, { useContext, useState } from 'react'
import { searchContext } from '../../App'

const Search = () => {
    const {filter, setFilter} = useContext(searchContext)
    return (
        <section>
            <div className="mx-auto md:w-[70%] w-[90%]" >
                <form>
                    <div className='p-3 border-[1px] rounded-md bg-white'>
                        <div className={`flex justify-between items-center `}>
                            <input className='w-full outline-none p-2 bg-transparent' type="text" placeholder='Enter ptoduct name...' onChange={e => setFilter(e.target.value)} style={{ backgroundColor: 'none' }} />
                            <span class="material-symbols-outlined">
                                search
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default Search