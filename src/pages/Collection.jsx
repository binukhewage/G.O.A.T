import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { ChevronDown } from 'lucide-react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products } = useContext(ShopContext)
  const [showFilter,setShowfilter] = useState(false)
  const [filterProducts,setFilterProducts] = useState([])

  useEffect(() => {
    setFilterProducts(products)
  })

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300'>

      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() =>setShowfilter (!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <ChevronDown className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`  }/>
        </p>
        
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 test-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} /> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} /> Women
            </p>
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 test-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} /> Bottomwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'PRODUCTS'}/>
          {/* PRODUCT SORT */}
          <select className='border border-gray-300 text-sm px-2'>
            <option value="relavant">Sort by: Relavant</option>
            <option value="low-high">Sort by: Low - High</option>
            <option value="high-low">Sort by: High - Low</option>
          </select>
        </div>

        {/* MAP PRODUCTS */}
        <div className='grid grid-cols-3 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=> (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection