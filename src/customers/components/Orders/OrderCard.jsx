import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl border rounded-md'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img src="" alt="" className='w-[5rem] h-[5rem] object-cover object-top'/>
                    <div className='ml-5 space-y-2'>
                        <p className=''>Himalaya liv 52</p>
                        <p className='opacity-50 text-xs font-semibold'>Size : 250gm</p>
                        <p className='opacity-50 text-xs font-semibold'>Brand : Himalaya</p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={2}>
                <p>₹199</p>
            </Grid>
            <Grid item xs={4}>
            { true && <div>
                <p>
                <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-yellow-500 mr-2 text-xs' />
                    <span>
                        Delivered on March 4
                    </span>
                </p>
                <p className='text-xs'>
                Your Item Has Been Delivered
                </p>
            </div>  }
                { false &&   <p>
                    <span>
                       Expected Delivery on March 4
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard