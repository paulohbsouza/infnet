import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container 
} from "reactstrap"

import Header from "./components/Header";
import Users from "./components/Users";
import Feedback from "./components/Feedback";
import Home from "./components/Home";

// MIT 2025.2
import Data from "./components/Data/Data";
import UsersAxios from "./components/UsersAxios";
import StateStudy from './components/StateStudy';
import Icons from './components/Icons';

//createContext
import { ThemeProvider } from "./hooks/ThemeContext";
import Tema from "./components/Tema";
import { CartProvider } from "./hooks/CartContext";
import Store from './components/Store';

//@reduxjs/toolkit
import { Provider } from "react-redux";
import { store } from "./redux/store";
import StoreRedux from "./components/StoreRedux";

import './App.css'

function App() {
  return (
      <Provider store={store}>
        <ThemeProvider>
          <CartProvider>
            <Router>
              <div className="d-flex flex-column" style={{minHeight: "100vh"}}>
                <Header/>
                <Container className="flex-grow-1">
                  <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/users" element={<Users/>} />
                    <Route path="/feedback" element={<Feedback/>} />
                    <Route path="/data" element={<Data/>} />
                    <Route path="/users-axios" element={<UsersAxios/>} />
                    <Route path="/state-study" element={<StateStudy/>} />
                    <Route path="/icons" element={<Icons/>} />
                    <Route path="/store" element={<Store/>} />
                    <Route path="/store-redux" element={<StoreRedux/>} />
                    <Route path="/tema" element={<Tema/>} />
                  </Routes>
                </Container>
                <footer className="bg-dark text-white text-center p-3">
                  INFNET - MIT Full Stack 2025
                </footer>
              </div>
            </Router>
          </CartProvider>
        </ThemeProvider>
      </Provider>
  );
}

export default App
