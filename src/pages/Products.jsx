import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { ChevronDown } from 'lucide-react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Products = () => {
  const { products } = useContext(ShopContext)
  const [showFilter, setShowfilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortOption, setSortOption] = useState('relavant')

  const toggleCategory = (e) => {
    const value = e.target.value
    setCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  const toggleSubCategory = (e) => {
    const value = e.target.value
    setSubCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  // Filter + Sort logic
  useEffect(() => {
    let filtered = products

    if (category.length > 0) {
      filtered = filtered.filter(p => category.includes(p.category))
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter(p => subCategory.includes(p.type))
    }

    if (sortOption === 'low-high') {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortOption === 'high-low') {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    }

    setFilterProducts(filtered)
  }, [products, category, subCategory, sortOption])

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-300'>
      <div className='flex flex-col lg:flex-row gap-6'>
        {/* Mobile Filters */}
        <div className='lg:hidden'>
          <button 
            onClick={() => setShowfilter(!showFilter)} 
            className='flex items-center justify-between w-full py-2 px-4 bg-gray-100 rounded-md'
          >
            <span className='font-medium'>FILTERS</span>
            <ChevronDown className={`h-4 transition-transform ${showFilter ? 'rotate-180' : ''}`} />
          </button>

          {showFilter && (
            <div className='mt-2 space-y-4 p-4 bg-white border border-gray-200 rounded-md'>
              <div className='border-b border-gray-200 pb-4'>
                <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                <div className='flex flex-col gap-2 text-sm text-gray-700'>
                  {['Men', 'Women'].map((val) => (
                    <label key={val} className='flex items-center gap-2'>
                      <input type="checkbox" value={val} className='w-4 h-4' onChange={toggleCategory} />
                      {val}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Filters */}
        <div className='hidden lg:block w-64 flex-shrink-0'>
          <p className='my-2 text-xl font-medium'>FILTERS</p>

          <div className='border border-gray-200 rounded-md p-5 mt-4'>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-3 text-sm text-gray-700'>
              {['Men', 'Women'].map((val) => (
                <label key={val} className='flex items-center gap-2'>
                  <input type="checkbox" value={val} className='w-4 h-4' onChange={toggleCategory} />
                  {val}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className='flex-1'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 text-3xl'>
            <Title text1={'ALL'} text2={'PRODUCTS'} />
            <div className='w-full sm:w-auto'>
              <select
                className='w-full sm:w-48 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="relavant">Sort by: Relevant</option>
                <option value="low-high">Sort by: Low - High</option>
                <option value="high-low">Sort by: High - Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6'>
            {filterProducts.map((item, index) => (
              <ProductItem 
                key={index} 
                name={item.name} 
                id={item._id} 
                price={item.price} 
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
