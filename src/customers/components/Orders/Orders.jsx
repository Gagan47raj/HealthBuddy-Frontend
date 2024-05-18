import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

const orderStat=[
    {lable:"Order Accepted", value:"order_accepted"},
    {lable:"Order Processing", value:"order_processing"},
    {lable:"Out For Delivery", value:"out_for_delivery"},
    {lable:"Order Delivered", value:"order_delivered"},
    {lable:"Order Canceled", value:"order_canceled"},
    {lable:"Order Returned", value:"order_returned"},
]

const Orders = () => {
  return (
    <div className='px:5 py-5 lg:px-20'>
        <Grid container sx={{justifyContent:"space-between"}}>
            <Grid item xs={2.5}>
                <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                    <h1 className='font-bold text-lg'>Filter</h1>

                    <div className='space-y-4 mt-10'>
                        <h1 className='font-semibold'>ORDER STATUS</h1>

                       {orderStat.map((option) => (
                            <div className='flex items-center'>
                            <input defaultValue={option.value} type='checkbox' className='w-4 h-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                            <label className='ml-3 text-sm text-gray-600' htmlFor='{option.value}'>
                                {option.lable}
                            </label>
                        </div>
                       ))}
                    </div>
                </div>
            </Grid>

            <Grid item xs={9}>
                <div className='space-y-5'>
                {[1,1,1].map((item) => <OrderCard/>)}
                </div>
                
            </Grid>
        </Grid>
    </div>
  )
}

export default Orders