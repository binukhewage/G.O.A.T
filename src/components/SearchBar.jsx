import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FaSearch} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'


const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation()


    useEffect(() => {
        if (location.pathname.includes('/products')) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [location])

  return showSearch && visible ? (
    <div className='border-t border-b border-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 bg-inherit text-sm outline-none' />
            <FaSearch className='text-gray-400' />
        </div>
        <button 
        className='text-gray-500 text-xl cursor-pointer' 
        onClick={() => setShowSearch(false)}>X</button>
    </div>
  ) : null
}

export default SearchBar