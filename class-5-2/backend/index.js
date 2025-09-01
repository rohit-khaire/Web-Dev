const {createTodo, updateTodo} = require("./types.js")
const express = require("express");
const fs = require("fs");  // Instead of DB, using File System
const cors = require("cors");

const FILE = "todos.json";
const server = express();

server.use(express.json());
server.use(cors());

// Read todos
function readTodos() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE, "utf8"));
}

// Write todos
function writeTodos(todos) {
  fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
}

server.get("/todos", (req,res)=>{
    res.json(readTodos());
})


server.post("/todos", (req,res)=>{  //If DB used, then can use async/await
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    //put it in mongodb, using fs here
    const todos = readTodos();
    const newTodo = {
        id: Date.now().toString(),
        ...req.body,
        completed: false,
    };

    todos.push(newTodo);
    writeTodos(todos);

    res.json({
        msg: "Todo created"
    })
})


server.put("/completed", (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    //mark it as completed
    const todos = readTodos();
    const todo = todos.find((t) => t.id === req.body.id);
    if (!todo) return res.status(404).json({ msg: "Todo not found" });

    todo.completed = true;
    writeTodos(todos);

    res.json({
        msg: "Todo marked as completed"
    })
})


server.listen(3000);