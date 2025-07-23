import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import VendaMensal from "./VendaMensal.js";


dotenv.config();

//process.env.MONGO.URI

const app = express();
const PORT = 3000;

app.use(express.json());

const connectDB = async () => {
try {
await mongoose.connect(process.env.MONGO_URI);
console.log("Conectado ao MongoDB");
} catch (error) {
    console.log("Deu erro ao conectar com o MongoDB", error, );
}

};

connectDB();

//create 
app.post("/vendas",async (req, res) => {
    try {
        const novaVendaMensal = await VendaMensal.create(req.body);  
        res.json(novaVendaMensal);
    } catch (error) {
        res,json({error: error.message});
    }
});

//read
app.get("/vendas", async (req, res) => {
    try {
        const vendasMensais = await VendaMensal.find();
        res.json(vendasMensais);
    } catch (error) {
        res.json({error: error.message});
    }
});

//update
app.put("/vendas/:id", async (req, res) => {
    try {
        const novaVendaMensal = await VendaMensal.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(novaVendaMensal);
    } catch (error) {
        res.json({error: error.message});
    }
});

//delete
app.delete("/vendas/:id", async (req, res) => {
    try {
        const VendaMensalExcluida = await VendaMensal.findByIdAndDelete(req.params.id);
        res.json(VendaMensalExcluida);
    }   catch (error) {
        res.json({error: error.message});
    }
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
