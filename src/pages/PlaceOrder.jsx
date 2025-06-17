import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import payhereimg from '../assets/payhere.png'

const PlaceOrder = () => {
  const { cartItems, products, currency, delivery_fee } = useContext(ShopContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    contactNumber: ''
  });

  const {navigate} = useContext(ShopContext)

  // Calculate cart totals
  React.useEffect(() => {
    let calculatedSubtotal = 0;
    
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const product = products.find(p => p._id === itemId);
          if (product) {
            calculatedSubtotal += product.price * cartItems[itemId][size];
          }
        }
      }
    }
    setSubtotal(calculatedSubtotal);
    setTotal(calculatedSubtotal + delivery_fee);
  }, [cartItems, products, delivery_fee]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission with formData and paymentMethod
    console.log('Order submitted:', { ...formData, paymentMethod, total });
  };

  return (
    <div className="border-t pt-14 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="text-2xl mb-8">
        <Title text1={'PLACE'} text2={"ORDER"} />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Delivery Information */}
        <div className="lg:w-1/2">
          <h2 className="text-xl font-bold mb-4">Delivery Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </form>
        </div>

        {/* Right Column - Order Summary and Payment */}
        <div className="lg:w-1/2">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal:</span>
                <span>{currency} {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Shipping Fee:</span>
                <span>{currency} {delivery_fee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-3">
                <span className="font-bold">Total:</span>
                <span className="font-bold">{currency} {total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Payment Method</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* PayHere.lk Option */}
                <div 
                  onClick={() => setPaymentMethod('payhere')}
                  className={`flex-1 p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'payhere' ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src={payhereimg}
                        alt="PayHere.lk" 
                        className="h-8 object-contain"
                      />
                      
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'payhere' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}>
                      {paymentMethod === 'payhere' && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                {/* Cash on Delivery Option */}
                <div 
                  onClick={() => setPaymentMethod('cod')}
                  className={`flex-1 p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="font-medium">Cash on Delivery</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cod' ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}>
                      {paymentMethod === 'cod' && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() =>navigate('/orders')}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors mt-4"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;