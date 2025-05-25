import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const { products } = useContext(ShopContext)
    const [ latestProducts,setLatestProducts ] = useState([])

    useEffect (() => {
        setLatestProducts(products.slice(0,6))
    },[])



  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className="w-11/12 max-w-xl mx-auto text-sm sm:text-base text-gray-600 pb-6">
            Explore our newest drop featuring bold, iconic tees inspired by legends.
            </p>
        </div>
        {/* Rendering Products */}
        <div className='grid grid-cols-3 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>

    </div>
  )
}

export default LatestCollection