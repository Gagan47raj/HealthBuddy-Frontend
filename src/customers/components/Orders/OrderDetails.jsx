import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTrakering from '../Orders/OrderTracking'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StarBorderOutlined } from '@mui/icons-material'


const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard/>    
        </div>

        <div className='py-10 lg:px-15'>
          <OrderTrakering activeStep={3}/>
        </div>

        <Grid className='space-x-5' container>

        {[1,1,1,1].map((item) => 
        <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignContent:"center",justifyContent:'space-between'}}>
         
        <Grid item xs={6}>
          <div className='flex items-center space-x-4'>
            <img className='w-[5rem] h-[5rem] object-cover object-top' src='' alt='' />

            <div className='space-y-2 ml-5'>
              <p className='font-semibold'>Himalaya Liv 52 DS</p>
              
              <p className='space-x-5 opacity-50 text-xs font-semibold' >
                <span>Brand : Himalaya</span> <span>Quantity : 250gm</span>
              </p>
              <p>Seller : Sun Pharmaceutical</p>
              <p>$199</p>      
            </div>
          </div>
          </Grid>

          <Grid item>
            <Box sx={{color : deepPurple[500]}}>
              <StarBorderOutlined sx={{fontSize : "2rem"}} fontSize={'2px'} className='px-2'/>
              <span>Rate & Review Product</span>
            </Box>
          </Grid>

      </Grid>)}

        

      </Grid>

        
    </div>
  )
}

export default OrderDetails