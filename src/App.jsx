import BlogPreview from "./components/BlogPreview";
import NavBar from "./components/Navbar";
import { useState, useEffect } from "react";

const App = () => {

  

  // useState
  const [title, setTitle] = useState("Hello");

  const [lessons, setLessons] = useState([
    {title: "Intro to React", author: "Joel", id: 1},
    {title: "Frontend Dev", author: "Joel", id: 2},
    {title: "Figma Tutorial", author: "Joel", id: 3},
    {title: "Flask", author: "Joe", id: 4},
    {title: "Industry Concepts", author: "Brad", id: 5},
  ]);

  const handleDelete = (id) => {
    const newLessons = lessons.filter((l) => l.id !== id);
    setLessons(newLessons);
  }

  useEffect(() => {
    console.log("refreshed");
  }, [title]);
  

  return ( 
    <div className="bg-slate-500">
      <NavBar />
      <div className="content">
        <h1 className="text-5xl">{title}</h1>

        <button onClick={() => setTitle("Bonjour")}>Change title</button>

        {
          lessons.map((l) => (
            <BlogPreview lesson={l} key={l.id} handleDelete={handleDelete} />
          ))
        }


      </div>
    </div>
   );
}
 
export default App;