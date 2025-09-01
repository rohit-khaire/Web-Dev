
export function Todos({todos}){
    return (
        <div>
            {
            todos.map((x)=>{
                return (
                <div>
                    <h2>{x.title}</h2>
                    <h4>{x.desc}</h4>
                    <button>{x.completed==true? "Completed": "Mark as Complete"}</button>
                </div>
                )
            })
            }
        </div>
    )
}