import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [desc, setDesc] = useState("");
    return (
        <div>
            <input placeholder="Title" type="text" onChange={function(e){
                const value= e.target.value;
                setTitle(value);
            }}></input><br></br>

            <input placeholder="Description" type="text" onChange={function(e){
                const value= e.target.value;
                setDesc(value);
            }}></input><br></br><br></br>

            <button onClick={()=>{
                fetch("http://localhost:3000/todos", { 
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        desc: desc 
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((resopnse)=>{
                    return resopnse.json();
                }).then((result)=>{
                    alert("Todo Added!");
                }).catch(()=> console.log("Error"))
            }}>Add Todo</button>
        </div>
    )
}