import { AccountBoxOutlined, CurrencyRupee, MoreVertOutlined, Phone, TrendingUp } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'

const salesData = [
    {
        stats : '12k',
        title : 'Sales',
        color : 'primary',
        icon : <TrendingUp sx={{fontSize : '1.75rem'}}/>
    },
    {
        stats : '15k',
        title : 'Customers',
        color : 'success',
        icon : <AccountBoxOutlined sx={{fontSize : '1.75rem'}}/>
    },
    {
        stats : '1.5k',
        title : 'Products',
        color : 'warning',
        icon : <Phone sx={{fontSize : '1.75rem'}}/>
    },
    {
        stats : '85k',
        title : 'Revenue',
        color : 'info',
        icon : <CurrencyRupee sx={{fontSize : '1.75rem'}}/>
    }
]

const renderState = () =>{
    return salesData.map((item,index) =>(
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{
                display:"flex",
                alignItems:"center",
            }}>
                <Avatar  variant='rounded' sx={{
                    mr:3,
                    width:44,
                    height:44,
                    boxShadow:3,
                    color:"white",
                    background:`${item.color}` 
                }}>          
                {item.icon}          
                </Avatar>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography variant='caption'>{item.title}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>
                </Box>
            </Box>
        </Grid>
    ))
}

const MonthlyOverview = () => {
  return (
    <Card sx={{bgcolor:'#fbd24e',color:'white'}}>
        <CardHeader title="Monthly Overview"
        action={
            <IconButton size='small'>
                <MoreVertOutlined/>
            </IconButton>
        }
        subheader={
            <Typography variant='body2'>
                <Box component="span" sx={{fontWeight:600, color:'text.primary'}}>
                    Total Growth 34%
                </Box>
                This Month
            </Typography>
        }
        titleTypographyProps={{
            sx:{
                mb:2.5,
                lineHeight:'2rem !important',
                letterSpacing:'0.15px !important'
            }
        }}
        />
        <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
            <Grid container spacing={[5,0]}>
                {renderState()}
            </Grid>
        </CardContent>
    </Card>
  )
}

export default MonthlyOverview