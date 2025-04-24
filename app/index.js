import express from "express";
import UserController from "./controllers/UserController.js";

const app = express();

import cors from 'cors';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {  
    res.send("Hello World");
}); 

app.get("/users", UserController.getAllUsers);

app.get("/users/:id", UserController.getUserById);

app.post("/users", UserController.createUser);

app.put("/users/:id", UserController.updateUser);

app.delete("/users/:id", UserController.deleteUser);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});