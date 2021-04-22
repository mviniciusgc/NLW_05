import "reflect-metadata";
import express from 'express';
import "./database";

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: 'Olá mundo' })
})

app.post("/", (request, response) => {
    return response.json({ message: 'Usuário salvo com sucesso' })
})

app.listen(3333, () => {
    console.log("Server started in port 3333")
})