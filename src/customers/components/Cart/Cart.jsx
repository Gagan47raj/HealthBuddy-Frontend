import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../States/Cart/Action'


const Cart = () => {

    const navigate = useNavigate();
    const {cart} = useSelector(store => store)  
    const dispatch = useDispatch();
    const handleCheckOut = () => {
        navigate("/checkout?step=2");
    }
    useEffect(()=>{
        dispatch(getCart())
    },[cart.updateCartItem,cart.deleteCartItem])
  return (
    <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
            {cart.cart?.cartItems.map((item) => <CartItem item={item}/>)}        
        </div>

       <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
        <div className='border'>
            <p className='uppercase font-bold opacity-60 p-4'>
                Price Details
            </p>
            <hr />
            <div className='space-y-3 font-semibold mb-10 p-5'>
            <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span className='text-green-600'>₹{cart.cart?.totalPrice}</span>
            </div>
            <div className='flex justify-between pt-3 '>
                <span>Discount</span>
                <span className='text-green-600'>₹{cart.cart?.discount}</span>
            </div>
            <div className='flex justify-between pt-3 text-black'>
                <span>Delivery Charge</span>
                <span className='text-green-600'>Free</span>
            </div>
            <div className='flex justify-between pt-3 text-black'>
                <span>Total Amount</span>
                <span className='text-green-600'>₹{cart.cart?.totalDiscountedPrice}</span>
            </div>
            </div>
            <Button onClick={handleCheckOut} className="w-full" variant="contained" sx={{px:"2.5rem",py:".7rem",bgcolor:"#9155fd"}}>
                Checkout
            </Button>
        </div>
        </div> 
    </div>
  )
}

export default Cart