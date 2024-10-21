import NavBar from "./components/Navbar";
import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import Home from "./home";
import About from "./About";

const App = () => {

  
  

  return ( 
    <BrowserRouter>
      <div className="bg-slate-500">
        <NavBar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          {/* About Route */}
          <Route path="/about" element={<About />} />
          {/* Blog Details Route */}
          <Route path="/blog/:id" element={<BlogDetails/>}/>
          <Route path="*" element={<h1>Error! Page Not Found</h1>} />
        </Routes>
        
      </div>
    </BrowserRouter>
   );
}
 
export default App;