import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        if (products && products.length > 0) {
            setLatestProducts(products.slice(0, 6))
        }
    }, []) 

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'ARRIVALS'} />
                <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-600">
                    Explore our newest drop featuring bold, iconic tees inspired by legends.
                </p>
            </div>
            
            {/* Product Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6'>
                {latestProducts.map((item) => (
                    <ProductItem 
                        key={item._id} 
                        id={item._id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price}
                    />
                ))}
            </div>

            {/* Optional View All Button */}
            <div className="mt-12 text-center">
                <Link
                to='/products'
                className="px-8 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors duration-200">
                    VIEW ALL PRODUCTS
                </Link>
            </div>
        </section>
    )
}

export default LatestCollection