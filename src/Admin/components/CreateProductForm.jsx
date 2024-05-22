import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../States/Product/Action";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const initialSizes = [
  { name: "10 Tablets", quantity: 0 },
  { name: "20 Tablets", quantity: 0 },
  { name: "30 Tablets", quantity: 0 },
  { name: "30 mL/gm", quantity: 0 },
  { name: "60 mL/gm", quantity: 0 },
  { name: "100 mL/gm", quantity: 0 },
  { name: "150 mL/gm", quantity: 0 },
  { name: "200 mL/gm", quantity: 0 },
  { name: "250 mL/gm", quantity: 0 }
];



const CreateProductForm = () => {
    const [productData, setProductData] = useState({
      imageUrl: "",
      brand: "",
      name: "",
      price: "",
      discountedPrice: "",
      discountPercent: "",
      size: initialSizes,
      description: "",
      quantity: "",
      firstCategory: "",
      secondCategory: "",
      thirdCategory: "",
    });

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));  
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? (name = "quantity") : (name = e.target.name);

    const sizes = [...productData.size];
    sizes[index][name] = value;

    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (productData.firstCategory) {
      dispatch(createProduct(productData));
    } else {
      console.error('First category must be selected');
    }
  };

  return (
    <div className="p-10">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center"
      >
        Add New Product
      </Typography>

      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={productData.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Discount Percent"
              name="discountPercent"
              value={productData.discountPercent}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>First Category</InputLabel>
              <Select
                name="firstCategory"
                value={productData.firstCategory}
                onChange={handleChange}
                label="First Category"
              >
                <MenuItem value="analgesics">Analgesics</MenuItem>
                <MenuItem value="antibiotics">Antibiotics</MenuItem>
                <MenuItem value="antivirals">Antivirals</MenuItem>
                <MenuItem value="antifungals">Antifungals</MenuItem>
                <MenuItem value="antihypertensives">Antihypertensives</MenuItem>
                <MenuItem value="antidiabetics">Antidiabetics</MenuItem>
                <MenuItem value="antidepressants">Antidepressants</MenuItem>
                <MenuItem value="antipsychotics">Antipsychotics</MenuItem>
                <MenuItem value="gastrointestinalagents">
                  Gastrointestinal Agents
                </MenuItem>
                <MenuItem value="respiratoryagents">
                  Respiratory Agents
                </MenuItem>
                <MenuItem value="anticoagulants">Anticoagulants</MenuItem>
                <MenuItem value="vitaminsandsupplements">
                  Vitamins and Supplements
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Category</InputLabel>
              <Select
                name="secondCategory"
                value={productData.secondCategory}
                onChange={handleChange}
                label="Second Category"
              >
                <MenuItem value="nonopioidanalgesics">
                  Non-Opioid Analgesics
                </MenuItem>
                <MenuItem value="opioidanalgesics">Opioid Analgesics</MenuItem>
                <MenuItem value="penicillins">Penicillins</MenuItem>
                <MenuItem value="cephalosporins">Cephalosporins</MenuItem>
                <MenuItem value="macrolides">Macrolides</MenuItem>
                <MenuItem value="fluoroquinolones">Fluoroquinolones</MenuItem>
                <MenuItem value="hivantivirals">HIV Antivirals</MenuItem>
                <MenuItem value="herpesantivirals">Herpes Antivirals</MenuItem>
                <MenuItem value="influenzaantivirals">
                  Influenza Antivirals
                </MenuItem>
                <MenuItem value="azoles">Azoles</MenuItem>
                <MenuItem value="echinocandins">Echinocandins</MenuItem>
                <MenuItem value="polyeneantifungals">
                  Polyene Antifungals
                </MenuItem>
                <MenuItem value="aceinhibitors">ACE Inhibitors</MenuItem>
                <MenuItem value="betablockers">Beta Blockers</MenuItem>
                <MenuItem value="calciumchannelblockers">
                  Calcium Channel Blockers
                </MenuItem>
                <MenuItem value="diuretics">Diuretics</MenuItem>
                <MenuItem value="insulins">Insulins</MenuItem>
                <MenuItem value="oralhypoglycemics">
                  Oral Hypoglycemics
                </MenuItem>
                <MenuItem value="selectiveserotoninreuptakeinhibitors">
                  Selective Serotonin Reuptake Inhibitors (SSRIs)
                </MenuItem>
                <MenuItem value="serotoninnorepinephrinereuptakeinhibitors">
                  Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs)
                </MenuItem>
                <MenuItem value="tricyclicantidepressants">
                  Tricyclic Antidepressants (TCAs)
                </MenuItem>
                <MenuItem value="typicalantipsychotics">
                  Typical Antipsychotics
                </MenuItem>
                <MenuItem value="atypicalantipsychotics">
                  Atypical Antipsychotics
                </MenuItem>
                <MenuItem value="protonpumpinhibitors">
                  Proton Pump Inhibitors (PPIs)
                </MenuItem>
                <MenuItem value="h2receptorantagonists">
                  H2 Receptor Antagonists
                </MenuItem>
                <MenuItem value="laxatives">Laxatives</MenuItem>
                <MenuItem value="bronchodilators">Bronchodilators</MenuItem>
                <MenuItem value="corticosteroids">Corticosteroids</MenuItem>
                <MenuItem value="leukotrienereceptorantagonists">
                  Leukotriene Receptor Antagonists
                </MenuItem>
                <MenuItem value="vitaminkantagonists">
                  Vitamin K Antagonists
                </MenuItem>
                <MenuItem value="directoralanticoagulants">
                  Direct Oral Anticoagulants (DOACs)
                </MenuItem>
                <MenuItem value="heparins">Heparins</MenuItem>
                <MenuItem value="vitamins">Vitamins</MenuItem>
                <MenuItem value="minerals">Minerals</MenuItem>
                <MenuItem value="herbalsupplements">
                  Herbal Supplements
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Category</InputLabel>
              <Select
                name="thirdCategory"
                value={productData.thirdCategory}
                onChange={handleChange}
                label="Third Category"
              >
                <MenuItem value="acetaminophen">
                  Acetaminophen (e.g., Tylenol)
                </MenuItem>
                <MenuItem value="Nonsteroidal Anti-Inflammatory Drug">
                  Nonsteroidal Anti-Inflammatory Drugs (NSAIDs) (e.g.,
                  ibuprofen, naproxen)
                </MenuItem>
                <MenuItem value="Morphine">Morphine</MenuItem>
                <MenuItem value="Oxycodone">Oxycodone</MenuItem>
                <MenuItem value="Fentanyl">Fentanyl</MenuItem>
                <MenuItem value="Amoxicillin">Amoxicillin</MenuItem>
                <MenuItem value="Penicillin">Penicillin G</MenuItem>
                <MenuItem value="Ceftriaxone">Ceftriaxone</MenuItem>
                <MenuItem value="Cephalexin">Cephalexin</MenuItem>
                <MenuItem value="Azithromycin">Azithromycin</MenuItem>
                <MenuItem value="Erythromycin">Erythromycin</MenuItem>
                <MenuItem value="Ciprofloxacin">Ciprofloxacin</MenuItem>
                <MenuItem value="Levofloxacin">Levofloxacin</MenuItem>
                <MenuItem value="Zidovudine">Zidovudine (AZT)</MenuItem>
                <MenuItem value="Lamivudine">Lamivudine</MenuItem>
                <MenuItem value="Acyclovir">Acyclovir</MenuItem>
                <MenuItem value="Valacyclovir">Valacyclovir</MenuItem>
                <MenuItem value="Oseltamivir">Oseltamivir (Tamiflu)</MenuItem>
                <MenuItem value="Zanamivir">Zanamivir</MenuItem>
                <MenuItem value="Fluconazole">Fluconazole</MenuItem>
                <MenuItem value="Ketoconazole">Ketoconazole</MenuItem>
                <MenuItem value="Caspofungin">Caspofungin</MenuItem>
                <MenuItem value="Micafungin">Micafungin</MenuItem>
                <MenuItem value="Amphotericin">Amphotericin B</MenuItem>
                <MenuItem value="Nystatin">Nystatin</MenuItem>
                <MenuItem value="Lisinopril">Lisinopril</MenuItem>
                <MenuItem value="Enalapril">Enalapril</MenuItem>
                <MenuItem value="Metoprolol">Metoprolol</MenuItem>
                <MenuItem value="Atenolol">Atenolol</MenuItem>
                <MenuItem value="Amlodipine">Amlodipine</MenuItem>
                <MenuItem value="Verapamil">Verapamil</MenuItem>
                <MenuItem value="Hydrochlorothiazide">
                  Hydrochlorothiazide
                </MenuItem>
                <MenuItem value="Furosemide">Furosemide</MenuItem>
                <MenuItem value="Insulin Glargine">Insulin Glargine</MenuItem>
                <MenuItem value="Insulin Lispro">Insulin Lispro</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              id="outlined-multiline-static"
              multiline
              rows={3}
              value={productData.description}
              onChange={handleChange}
            />
          </Grid>

          {productData.size.map((size, index) => (
            <Grid container item spacing={3} key={index}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Size name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  value={size.quantity} // Ensure this value is set
                  onChange={(event) => handleSizeChange(event, index)}
                  fullWidth
                />
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button 
            variant="contained"
            sx={{p:1.8}}
            className="py-20"
            size="large"
            type="submit"
            >
             Add New Product
            </Button> 
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateProductForm;
