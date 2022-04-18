import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider} from "react-use-cart";
import LandingPage from "./pages/landingpage.js";
import LoginComponent from "./pages/pagecomponents/login/login.js";
import Listing from "./pages/pagecomponents/listings/listing.js";
import ListingPage from "./pages/pagecomponents/listings/alllistings.js";
import ShoppingCart from "./pages/pagecomponents/cart.js";
import Account from "./pages/pagecomponents/login/account.js"
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css';



function App() {
  return (
    <>
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/cart" element={<ShoppingCart/>} />
        <Route path="/login" element={<LoginComponent/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/listings" element={<ListingPage />} />
        <Route path="/listings/:id" element={<Listing />} />
      </Routes>
    </Router>
    </CartProvider>
    </>
  );
}

export default App;

//this app.js file routes the react app to all the different pages and components that make up my website//
//it does this through React DOM//
