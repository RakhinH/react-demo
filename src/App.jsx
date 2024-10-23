import NavBar from "./components/Navbar";
import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import Home from "./home";
import About from "./About";

// importing the relevant pages and data from other files
import Login from "./components/Login";
import Register from "./components/Register";


const App = () => {

  const [user, setUser] = useState({
    id: 12345,
    email: "test@test.com",
    password: "test"
  })
  

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

          {/* Login Route */}
          <Route path="/login" element={<Login id={user.id} email={user.email} password={user.password}/>} />
          {/* Register Route */}
          <Route path="/register" element={<Register/>} />

          {/* Page Not Found Route */}
          <Route path="*" element={<h1>Error! Page Not Found</h1>} />
        </Routes>
        
      </div>
    </BrowserRouter>
   );
}
 
export default App;