import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, products, currency, updateQuantity, delivery_fee, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const tempdata = [];
    let calculatedSubtotal = 0;
    
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const product = products.find(p => p._id === itemId);
          if (product) {
            tempdata.push({
              _id: itemId,
              size: size,
              quantity: cartItems[itemId][size],
              product: product
            });
            calculatedSubtotal += product.price * cartItems[itemId][size];
          }
        }
      }
    }
    setCartData(tempdata);
    setSubtotal(calculatedSubtotal);
    setTotal(calculatedSubtotal + delivery_fee);
  }, [cartItems, products, delivery_fee]);

  const handleQuantityChange = (itemId, size, newQuantity) => {
    const quantity = Math.max(1, parseInt(newQuantity) || 1);
    updateQuantity(itemId, size, quantity);
  };

  if (cartData.length === 0) {
    return (
      <div className='border-t pt-14'>
        <div className='text-2xl mb-3'>
          <Title text1={'YOUR'} text2={"CART"}/>
        </div>
        <div className='text-center py-10'>
          <p className='text-gray-500'>Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={"CART"}/>
      </div>

      <div className='mb-8'>
        {cartData.map((item, index) => (
          <div key={index} className='py-4 border-t border-b text-gray-200 grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
            <div className='flex items-start gap-6'>
              <img 
                src={item.product.image[0]} 
                alt="product" 
                className='w-16 sm:w-20 object-cover' 
              />
              <div className='text-black'>
                <p className='text-sm sm:text-lg font-medium'>{item.product.name}</p>
                <div className='flex items-center gap-5 mt-2'>
                  <p>{currency} {item.product.price.toFixed(2)}</p>
                  <p className='px-2 sm:px-3 py-0.5 border bg-slate-50 text-gray-600 text-xs sm:text-sm'>
                    {item.size}
                  </p>
                </div>
              </div>
            </div>
            
            <input 
              type="number" 
              min={1} 
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item._id, item.size, e.target.value)}
              className='border max-w-16 px-2 py-1 text-gray-600 text-center'
            />
            
            <Trash2 
              className='cursor-pointer text-black w-5 mr-4 hover:text-red-500 transition-colors'
              onClick={() => updateQuantity(item._id, item.size, 0)}
            />
          </div>
        ))}
      </div>

      <CartTotal 
        currency={currency}
        subtotal={subtotal}
        delivery_fee={delivery_fee}
        total={total}
        onCheckout={() => navigate('/placeorder')}
      />
    </div>
  );
}


const CartTotal = ({ currency, subtotal, delivery_fee, total, onCheckout }) => {
  return (
    <div className='pt-4'>
      <div className='text-right mb-4'>
        <Title text1={"CART"} text2={"TOTAL"}/>
      </div>
      <div className='flex justify-between max-w-md ml-auto mb-2'>
        <span className='font-medium'>Subtotal:</span>
        <span>{currency} {subtotal.toFixed(2)}</span>
      </div>
      <div className='flex justify-between max-w-md ml-auto mb-2'>
        <span className='font-medium'>Shipping Fee:</span>
        <span>{currency} {delivery_fee.toFixed(2)}</span>
      </div>
      <div className='flex justify-between max-w-md ml-auto mb-4 border-t pt-2'>
        <span className='font-bold'>Total:</span>
        <span className='font-bold'>{currency} {total.toFixed(2)}</span>
      </div>
      <div className='flex justify-end mt-4'>
        <Link 
          to='/place-order' 
          className='bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors cursor-pointer'
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;