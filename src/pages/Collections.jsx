import React from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
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
    },
    // Add more collections as needed
  ]

  // Function to handle collection click
  const handleCollectionClick = (collectionId) => {
    navigate(`/collection/${collectionId}`)
  }

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 border-t border-gray-300'>
      {/* Header Section */}
      <div className='text-center mb-8 md:mb-12'>
        <div className='text-2xl sm:text-3xl md:text-4xl'>
          <Title text1={'OUR'} text2={'COLLECTIONS'} />
        </div>
        <p className="mt-4 text-sm sm:text-base max-w-2xl mx-auto text-gray-600 px-4">
          Explore our curated collections featuring legendary icons and cultural figures
        </p>
      </div>

      {/* Collections Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
        {collections.map((collection) => (
          <div 
            key={collection.id}
            onClick={() => handleCollectionClick(collection.id)}
            className='bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300 group'
          >
            {/* Collection Cover Image */}
            <div className='h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden'>
              <img 
                src={collection.image} 
                alt={collection.name}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            
            {/* Collection Details */}
            <div className='p-4 sm:p-6'>
              <h3 className='text-lg sm:text-xl font-bold mb-1 sm:mb-2 line-clamp-1'>{collection.name}</h3>
              <p className='text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2'>{collection.description}</p>
              
              {/* Featured Products Preview */}
              <div className='grid grid-cols-3 gap-2'>
                {collection.featuredProducts.map((productId, index) => {
                  const product = products.find(p => p._id === productId)
                  return product ? (
                    <div key={index} className='aspect-square overflow-hidden rounded'>
                      <img 
                        src={product.image[0]} 
                        alt={product.name}
                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                      />
                    </div>
                  ) : null
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if no collections) */}
      {collections.length === 0 && (
        <div className='text-center py-12'>
          <p className='text-gray-500'>No collections available at the moment.</p>
        </div>
      )}
    </div>
  )
}

export default Collections