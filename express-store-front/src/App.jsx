import React from "react";
import {useSelector} from "react-redux";
import Shop from "./components/Shop/Index";
import Login from "./components/Login/Index";
import Admin from "./components/Admin/Index";
import MyCart from "./components/MyCart/Index";
import MyList from "./components/MyList/Index";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Welcome from "./components/Welcome/Index";
import PrivateRoute from "./components/Header/PrivateRoute";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Checkout from "./components/MyCart/Checkout";

const App = () => {
  const username = useSelector((state) => state.auth.username);

  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              {/* Rotas não protegidas */}
              <Route path="/" element={<Shop/>}/>
              <Route path="/login" element={<Login/>}/>

              {/* Rotas protegidas */}
              <Route path="/*" element={
                  <PrivateRoute>
                      <Routes>
                          <Route path="/welcome" element={<Welcome/>}/>
                          <Route path="/admin" element={username === 'Admin' ? <Admin/> : 'You are not authorized to access this page.'}/>
                          <Route path="/my-list" element={<MyList/>}/>
                          <Route path="/my-cart" element={<MyCart/>}/>
                          <Route path="/checkout" element={<Checkout/>}/>
                      </Routes>
                  </PrivateRoute>
              }/>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App