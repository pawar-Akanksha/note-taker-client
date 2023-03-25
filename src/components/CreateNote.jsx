import React, { useState } from "react";
import { Navigate,redirect } from "react-router-dom";
import NavBar from "./Navbar";
import "./CreateNote.css"
const CreateNote = ()=>{
    const [title,setTitle] = useState("");
    const[description,setdescription] = useState("");
    const[navigate,setNavigate] = useState(false);

    async function CreateNote(e){
        e.preventDefault();
        const response = await fetch ("https://note-10ek.onrender.com/api/note",{
            method:"POST",
            body:JSON.stringify({title,description}),
            headers:{"Content-Type":"application/json"}
        });
        if(response.ok){
            setNavigate(true);
        }
    }
    if(navigate){
        return <Navigate to = {"/home"}/>
    }
    return(
        <>
        <NavBar/>
        <div className="newnotecont">
        <form onSubmit={CreateNote}>
            <div>Title</div>
            <div>
                <input type="text" id="tt" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>Description</div>
            <div>
            <input type="text" id="dsc" value={description} onChange={(e)=>setdescription(e.target.value)}/>
            </div>
        
        </form>
        </div>
        
        </>
    )
    
}
export default CreateNote;