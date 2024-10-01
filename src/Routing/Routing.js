import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AddBooks from "../Components/AddBooks/AddBooks";
import Header from "../layout/Header/Header";
import Home from "../Components/Home/Home";
import Admin from "../Components/Admin-Dashboard/Admin";
// import ViewAllbook from "../Components/Admin-Dashboard/ViewAllbook";
import Allbooks from "../Components/Books/Allbooks";
import ContactUs from "../Components/Contact-us/ContactUs";
import Regist from "../Components/Registration/Regist";
import BookDetails from "../Components/Books/BookDetails/BookDetails";
import ProductEdit from "../Components/Admin-Dashboard/ProductEdit";
import Login from "../Components/Login/Login";
import Profile from "../Components/Profile/profile";
import About from "../Components/About/About";
import CatWiseBook from "../Components/Home/CatWiseBook";
import KidCat from "../Components/Home/KidCat";
import FictionCat from "../Components/Home/FictionCat";
import AddToCart from "../Components/AddToCart/AddToCart";
import Horror from "../Components/Home/Horror";
import PNF from "../Components/PNF/PNF";
import AdminLogin from "../Components/Admin-Dashboard/AdminLogin/AdminLogin";
import ProtectedRouting from "../Components/Admin-Dashboard/ProtectedRouting/ProtectedRouting";
import CartDash from "../Components/AddToCart/CartDash";

const Routing = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
            {/* =========Admin panel========== */}
          <Route path="" element={<Home/>} />

          <Route element={<ProtectedRouting/>}>
          <Route path="admin" element={<Admin/>} />
          </Route>
          
          <Route path="add-book" element={<AddBooks/>}/>
          <Route path="admin/allbook/:id" element={<BookDetails/>}/>
          <Route path="admin/product_edit/:id" element={<ProductEdit/>}/>
          <Route path="/adminLogin" element={<AdminLogin/>} />

          {/* ===========User Panel========== */}
          <Route path="books" element={<Allbooks/>} />
          <Route path="books/bookDetails/:id" element={<BookDetails/>} />
          <Route path="contact" element={<ContactUs/>}/>
          <Route path="regist" element={<Regist/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="cat" element={<CatWiseBook/>}/>
          <Route path="cat/bookDetails/:id" element={<BookDetails/>} />
          <Route path="kid" element={<KidCat/>}/>
          <Route path="kid/bookDetails/:id" element={<BookDetails/>} />
          <Route path="fiction" element={<FictionCat/>}/>
          <Route path="fiction/bookDetails/:id" element={<BookDetails/>} />
          <Route path="cart/:id" element={<AddToCart/>}/>
          <Route path="cartdash" element={<CartDash/>}/>
          <Route path="horror" element={<Horror/>}/>
          <Route path="horror/bookDetails/:id" element={<BookDetails/>} />
          <Route path="*" element={<PNF/>} />
          





        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
