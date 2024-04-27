import React from 'react'
import { CartItemsList, CartTotals, SectionTitle } from '../components'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Cart = () => {
  
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { cartItems } = useSelector((state) => state.cart);

  const isCartEmpty = () => {
    if(cartItems.length === 0){
      toast.error("Your cart is empty");
    }else{
      navigate("/thank-you");
    }
  }

  return (
    <section className='bg-[#FEFDED] h-[70vh]'>
    <SectionTitle title="Cart" />
    <div className='mt-8 grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto px-10 bg-[#FEFDED]'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {loginState ? (
            <button onClick={isCartEmpty} className='btn bg-[#40826D] hover:bg-[#23473c] text-white btn-block mt-8'>
              order now
            </button>
          ) : (
            <Link to='/login' className='btn bg-[#40826D] hover:bg-[#23473c] btn-block text-white mt-8'>
              please login
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default Cart