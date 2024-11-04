import NavBar from "./components/Navbar";
import { useState, useEffect, useReducer } from "react";
import useFetch from "./hooks/useFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import Home from "./home";
import About from "./About";
import Create from "./hooks/Create";

// importing the relevant pages and data from other files
import Login from "./components/Login";
import Register from "./components/Register";



const BlogReducer = (state, action) => {

  switch (action.type) {
    case "SET": // Set whole state
      return action.payload;

    case "CREATE": // Create new blog
      return {...state, user: null};

    case "DELETE": // Delete a blog
      let filteredBlogs=state.filter(b => b.id!== action.payload);
      return filteredBlogs; 
    default:
      return state;
  }

}

const App = () => {
  
  const [blogs, dispatch] = useReducer(BlogReducer, null);

  const {data, isPending, isError} = useFetch("https://dummyjson.com/posts?limit=5");

  useEffect(() => {
    try {
      dispatch({type: "SET", payload: data.posts});
    } catch (e) {
      console.error("Failed to fetch data:", e);
    }
  }, [data]);

function deleteBlog(blogid) {
  dispatch({type: "DELETE",  id:blogid});
}

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
          <Route path="/" element={<Home data={blogs} isPending={isPending} isError={isError} handleDelete={deleteBlog}/>} />
          {/* About Route */}
          <Route path="/about" element={<About />} />
          {/* Blog Details Route */}
          <Route path="/blog/:id" element={<BlogDetails/>}/>
          {/* Create Route */}
          <Route path="/create" element={<Create/>} />
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