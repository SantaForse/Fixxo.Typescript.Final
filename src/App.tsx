import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../src/assets/css/views/style.css';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import WishListView from './views/WishListView';
import ProductProvider from './contexts/ProductContext';
import { ShoppingCartProvider} from './contexts/ShoppingCartContext';

function App () {
  return (
    <BrowserRouter>
          <ShoppingCartProvider>
          <ProductProvider>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/categories" element={<CategoriesView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/products/:id" element={<ProductDetailsView />} />
              <Route path="/contacts" element={<ContactsView />} />
              <Route path="/search" element={<SearchView />} />
              <Route path="/compare" element={<CompareView />} />
              <Route path="/wishlist" element={<WishListView />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </ProductProvider>
          </ShoppingCartProvider>
      </BrowserRouter>
  );
}

export default App;


//testing if it saves on gihub