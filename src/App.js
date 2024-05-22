import logo from './logo.svg';
import './App.css';
import Navigation from './customers/components/Navigation/Navigation';
import HomePage from './customers/pages/HomePage/HomePage';
import Footer from './customers/components/Footer/Footer';
import Product from './customers/components/Product/Product';
import ProductDetail from './customers/components/ProductDetails/ProductDetail';
import Cart from './customers/components/Cart/Cart';
import Checkout from './customers/components/Checkout/Checkout';
import Orders from './customers/components/Orders/Orders';
import OrderDetails from './customers/components/Orders/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';
import AdminRouters from './Routers/AdminRouters';

function App() {
  return (
    <div className="">

<Routes>
  <Route path="/*" element={<CustomerRouters />}></Route>
  <Route path='/admin/*' element={<AdminRouters />}></Route>
</Routes>

      
    </div>
  );
}

export default App;
