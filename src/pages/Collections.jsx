import React from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { assets, products } from '../assets/assets'


const Collections = () => {
  const navigate = useNavigate()

  // Define your collections
  const collections = [
    {
      id: 'icons-vol1',
      name: 'Icons Collection Vol. 01',
      description: 'Legendary figures who shaped culture',
      featuredProducts: ['aa', 'aab', 'aac'], // IDs of first 3 products
      image: assets.col1 // Use one of the product images as collection cover
    }
    // Add more collections as needed
  ]

  // Function to handle collection click
  const handleCollectionClick = (collectionId) => {
    navigate(`/collection/${collectionId}`)
  }

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-300'>
      <div className='text-center text-3xl'>
        <Title text1={'OUR'} text2={'COLLECTIONS'} />
    </div>
        <p className="mb-12 text-center max-w-2xl mx-auto text-gray-600">
          Explore our curated collections featuring legendary icons and cultural figures
        </p>
      

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {collections.map((collection) => (
          <div 
            key={collection.id}
            onClick={() => handleCollectionClick(collection.id)}
            className='bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300'
          >
            <div className='h-64 overflow-hidden'>
              <img 
                src={collection.image} 
                alt={collection.name}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-2'>{collection.name}</h3>
              <p className='text-gray-600 mb-4'>{collection.description}</p>
              <div className='grid grid-cols-3 gap-2'>
                {collection.featuredProducts.map((productId, index) => {
                  const product = products.find(p => p._id === productId)
                  return product ? (
                    <div key={index} className='aspect-square overflow-hidden rounded'>
                      <img 
                        src={product.image[0]} 
                        alt={product.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  ) : null
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collections