const {createTodo, updateTodo} = require("./types.js")
const express = require("express");

const server = express();

server.use(express.json());

server.get("/todo", (req,res)=>{

})

server.post("/todo", async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    //put it in mongodb

    res.json({
        msg: "Todo created"
    })
})

server.put("/completed", async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
})