import React from 'react'
import { FiRefreshCw, FiHeadphones, FiShield } from 'react-icons/fi'

const OurPolicy = () => {
  const policies = [
    {
      icon: <FiRefreshCw className="w-6 h-6" />,
      title: "Easy Exchange Policy",
      description: "We offer hassle-free exchange policy within 30 days of purchase"
    },
    {
      icon: <FiHeadphones className="w-6 h-6" />,
      title: "24/7 Customer Support",
      description: "Our dedicated team is available round the clock to assist you"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "All our products undergo rigorous quality checks before shipping"
    }
  ]

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg hover:shadow-sm transition-all duration-300"
            >
              <div className="bg-gray-50 p-3 rounded-full mb-4">
                {policy.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{policy.title}</h3>
              <p className="text-gray-600">{policy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurPolicy