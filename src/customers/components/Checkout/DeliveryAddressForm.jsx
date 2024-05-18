import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../States/Order/Action";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Address : ")

        const data = new FormData(e.currentTarget);
        
        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("streetAddress"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zipCode"),
            mobile : data.get("mobile")
        }

        const orderData = {address,navigate}
        dispatch(createOrder(orderData))
        
        console.log(address);
    }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard  />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large" 
              variant="contained"
            >
              Delivery Here
            </Button>
          </div>
        </Grid>
        
        <Grid item xs={12} lg={7}>
            <Box className="border rounded-s-md shadow-md p-5">
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            className="py-3"
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            className="py-3"
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            autoComplete="given-name"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            className="py-3"
                            id="streetAddress"
                            name="streetAddress"
                            label="Street Address"
                            fullWidth
                            autoComplete="given-name"
                            multiline
                            rows={3}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            className="py-3"
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="given-name"/>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            className="py-3"
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            autoComplete="given-name"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            className="py-3"
                            id="zipCode"
                            name="zipCode"
                            label="Zip/Pincode"
                            fullWidth
                            autoComplete="given-name"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            className="py-3"
                            id="mobile"
                            name="mobile"
                            label="Phone"
                            fullWidth
                            autoComplete="given-name"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Button
              sx={{py:1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large" 
              variant="contained"
              type="submit"
            >
              Delivery Here
            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Grid>
        </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
