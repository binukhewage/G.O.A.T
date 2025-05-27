import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const CollectionDetail = () => {
  const { products } = useContext(ShopContext)
  const { collectionId } = useParams()

  // Define your collections (must match Collections.js)
  const collections = [
    {
      id: 'icons-vol1',
      name: 'Icons Collection Vol. 01',
      description: 'Legendary figures who shaped culture',
      productIds: ['aa', 'aab', 'aac'] 
    }
  ]

  // Get collection by ID
  const collection = collections.find(c => c.id === collectionId)
  if (!collection) return <div className='text-center py-12 text-red-500'>Collection not found</div>

  // Get associated products
  const collectionProducts = products?.filter(p => collection.productIds.includes(p._id)) || []

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-300'>
      <div className='text-center text-3xl'>
        <Title 
          text1={collection.name.split(' ')[0]} 
          text2={collection.name.split(' ').slice(1).join(' ')} 
        />
    </div>
        <p className="mb-12 text-center max-w-2xl mx-auto text-gray-600">
          {collection.description}
        </p>
      

      {collectionProducts.length > 0 ? (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6'>
          {collectionProducts.map((product) => (
            <ProductItem 
              key={product._id}
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      ) : (
        <p className='text-center text-gray-500'>No products found in this collection.</p>
      )}
    </div>
  )
}

export default CollectionDetail
