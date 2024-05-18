import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../States/Order/Action'
import { createPayment } from '../../../States/Payment/Action'

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("orderId");
  const { order } = useSelector(store => store);

  useEffect(() => {
    dispatch(getOrderById(orderId))
  },[orderId])

  const handleCheckOut = () =>{
    dispatch(createPayment(orderId))
  }

  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard address={order.order?.address}/>
      </div>

      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
            {order.order?.orderItems.map((item) => <CartItem item={item}/>)}        
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
                <span className='text-green-600'>₹{order.order?.totalPrice}</span>
            </div>
            <div className='flex justify-between pt-3 '>
                <span>Discount</span>
                <span className='text-green-600'>₹{order.order?.discount}</span>
            </div>
            <div className='flex justify-between pt-3 text-black'>
                <span>Delivery Charge</span>
                <span className='text-green-600'>Free</span>
            </div>
            <div className='flex justify-between pt-3 text-black'>
                <span>Total Amount</span>
                <span className='text-green-600'>₹{order.order?.totalDiscountedPrice}</span>
            </div>
            </div>
            <Button onClick={handleCheckOut} className="w-full" variant="contained" sx={{px:"2.5rem",py:".7rem",bgcolor:"#9155fd"}}>
                Checkout
            </Button>
        </div>
        </div> 
    </div>

    </div>
  )
}

export default OrderSummary