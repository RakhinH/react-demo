import { useState } from "react";
import { v4 as uuid } from "uuid";

const Create = () => {

    const[title, setTitle] = useState("")
    const[bodyText, setBodyText] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        // TODO Create blog
    }

    return ( 
        <>
        <h2>New Blog</h2>

        <form action="">
            <label htmlFor="">Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)}/>

            <label htmlFor="">Body Text</label>
            <textare name="" id=""></textare>
            
            <button type="submit">Create Blog</button>
        </form>
        </>
     );
}
 
export default Create;