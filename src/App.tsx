import React, { useEffect } from "react";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import scrollreveal from "scrollreveal";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import './App.scss'
export default function App() {
  
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/category" element={<Category />} />


</Routes>

</BrowserRouter>
  );
}
