import BlogPreview from "./components/BlogPreview";
import NavBar from "./components/Navbar";
import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";

const App = () => {

  const {data, isPending, isError} = useFetch("https://dummyjson.com/posts");
  

  return ( 
    <div className="bg-slate-500">
      <NavBar />
      <div className="content p-2">

        {isPending && <p>Loading...</p>}

        {data && data.posts.map((p) => (
            <BlogPreview lesson={p} key={p.id} />
          ))
        }

        {isError && <p>Soemthing went wrong</p>}

      </div>
    </div>
   );
}
 
export default App;