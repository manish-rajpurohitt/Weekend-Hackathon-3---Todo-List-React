
import React,{useState} from "react";
import "./../styles/App.css";

export default function Todos(props) {
    const { value,saveChangeText,handleDelete } = props;
    const [editDisplay,setEditDisplay] = React.useState(false);
    const [editText,setEditText] = React.useState("");
    
    const handleEdit = (id)=>{
        setEditDisplay(!editDisplay);
    }
    const saveNewText = (id) => {
        saveChangeText(id, editText);
        setEditDisplay(false);
        setEditText("");
      };
      
    return (
        <div>
        <li className="list">{value.text }</li>
        <button className="edit" onClick={()=>handleEdit(value.id)}>Edit</button>
        <button className="delete" onClick={()=>handleDelete(value.id)}>Delete</button>
        {editDisplay?<div><input type="textarea" className="editTask" onChange={(e)=>setEditText(e.target.value)} value={editText}/>
        <button className="saveTask" onClick={()=>saveNewText(value.id)}>Save</button></div>:null}
        </div>
        );
    }
