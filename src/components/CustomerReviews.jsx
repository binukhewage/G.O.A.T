import React from 'react'

import Title from './Title'

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Shehara Madurawala',
      role: '',
      rating: 5,
      comment: 'The quality exceeded my expectations. The pieces I purchased have became my day to day fav. Absolutely stunning craftsmanship! Keep up the good work!.',
      
    },
    {
      id: 2,
      name: 'Binuk Hewage',
      role: '',
      rating: 4,
      comment: 'Iconic designs that blend modern aesthetics with functionality. The delivery was prompt and packaging was eco-friendly. Will definitely order again.',
      
    },
    {
      id: 3,
      name: 'Ruhini Hettiarachchi',
      role: '',
      rating: 5,
      comment: 'The customer service was exceptional - they helped me choose the perfect items for my space. Great Product.',
     
    }
  ]

  return (
    <div className='bg-gray-50 py-10 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center py-8 text-3xl'>
          <Title text1={'WHAT OUR'} text2={'CUSTOMERS SAY'}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Hear from those who have experienced our products and service firsthand.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {reviews.map((review) => (
            <div 
              key={review.id}
              className='bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300'
            >
              <div className='flex items-center mb-6'>
                
                <div>
                  <h4 className='font-medium'>{review.name}</h4>
                  <p className='text-sm text-gray-500'>{review.role}</p>
                </div>
              </div>
              <div className='flex mb-4'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className='text-gray-600 mb-6'>{review.comment}</p>
              <div className='border-t border-gray-100 pt-6'>
                <p className='text-xs text-gray-500'>Verified Purchase</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews