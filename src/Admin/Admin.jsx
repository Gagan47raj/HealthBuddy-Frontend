import { InboxIcon } from '@heroicons/react/16/solid';
import { AccountCircle, AddShoppingCart, Dashboard, Email, Person, Person2, ShoppingBag, StoreMallDirectory } from '@mui/icons-material';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import MyDashboard from './components/MyDashboard';
import CustomerTables from './components/CustomerTables';
import OrdersTable from './components/OrdersTable';
import CreateProductForm from './components/CreateProductForm';
import ProductTables from './components/ProductTables';


const menu =[
    {name :"Dashboard", path:"/admin",icon : <Dashboard/>},
    {name :"Products", path:"/admin/products",icon : <ShoppingBag/> },
    {name :"Customers", path:"/admin/customers",icon : <Person2/> },
    {name :"Orders", path:"/admin/orders",icon : <StoreMallDirectory/> },
    {name :"AddProducts", path:"/admin/product/create",icon : <AddShoppingCart/>},
]

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisible]=useState(false);
    const navigate = useNavigate(); 
    
    const drawer = (
        <Box
        sx={{
            overflow:"auto",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            // border:"1px solid #000",
            height:"100%",
        }}
        >

            {/* {isLargeScreen && <Toolbar/>} */}
            <List>
                {menu.map((item,index) =>
                <ListItem key= {item.name} disablePadding onClick={() => navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText>{item.name}</ListItemText>
                    </ListItemButton>
                </ListItem>
                )}
            </List>

            <List>
                
                <ListItem  disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircle/>
                        </ListItemIcon>
                        <ListItemText>Profile</ListItemText>
                    </ListItemButton>
                </ListItem>
                
            </List>

        </Box>
    )
  return (
    <div>
        <div className='flex h-[100vh] '>
            <CssBaseline/>

            <div className='w-[15%] border border-r-gray-300 h-full fixed top-0'>
                {drawer}
            </div>

            <div className='w-[85%] h-full ml-[15%]'>

                <Routes>
                    <Route path='/' element={<MyDashboard/>}></Route>
                    <Route path='/product/create' element={<CreateProductForm/>}></Route>
                    <Route path='/products' element={<ProductTables/>}></Route>
                    <Route path='/orders' element={<OrdersTable/>}></Route>
                    <Route path='/customers' element={<CustomerTables/>}></Route>  
                </Routes>

            </div>

        </div>
    </div>
  )
}

export default Admin