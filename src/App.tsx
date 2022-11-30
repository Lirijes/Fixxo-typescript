import './Style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import ProductProvider from './contexts/ProductContext';

import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import Categories from './views/Categories';
import Compare from './views/Compare';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails';
import Search from './views/Search';
import ShoppingCart from './views/ShoppingCart';
import WishList from './views/WishList';
import UserProvider from './contexts/UserContext';

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
      <UserProvider>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<Home />} /> {/* dessa gör att man kan navigera sig mellan knappar/länkar/kategorier */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ShoppingCartProvider> 
      </UserProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
