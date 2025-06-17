import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const { products, currency } = useContext(ShopContext)

  return (
    <div className='border-t py-16 px-4 sm:px-6 lg:px-8'>
      <div className='text-2xl mb-8'>
        <Title text1={"MY"} text2={"ORDERS"}/>
      </div>

      <div className='space-y-6'>
        {products.slice(1,4).map((item, index) => (
          <div key={index} className='py-6 border-t border-gray-200'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {/* Left - Product Image and Details */}
              <div className='flex items-start gap-4 md:gap-6'>
                <img 
                  src={item.image[0]} 
                  alt={item.name} 
                  className='w-16 sm:w-20 ' 
                />
                <div className='text-black'>
                  <p className='text-sm sm:text-base font-medium'>{item.name}</p>
                  <div className='flex flex-wrap items-center gap-3 mt-2 text-gray-700'>
                    <p className='text-base'>{currency} {item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className='mt-2 text-sm'>
                    Date: <span className='text-gray-500'>25th July 2024</span>
                  </p>
                </div>
              </div>

              {/* Middle - Order Status */}
              <div className='flex items-center justify-center'>
                <div className='flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full'>
                  <div className='w-2 h-2 rounded-full bg-green-500'></div>
                  <p className='text-sm text-gray-600'>Ready to ship</p>
                </div>
              </div>

              {/* Right - Track Order Button */}
              <div className='flex items-center justify-end'>
                <button className='border border-black px-6 py-2 text-sm font-medium rounded-sm text-gray-600 hover:bg-gray-50 transition-colors'>
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders