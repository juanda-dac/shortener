import express from "express";
import dotenv from "dotenv";
import morgan from "morgan"
import cors from "cors"

import "./setup.js"
import { sequelize } from "./database/database.js";

import indexRoutes from "./routes/index.routes.js";
import authRoutes from "./routes/auth.routes.js";
import linkRoutes from "./routes/link.routes.js";
import userRoutes from "./routes/user.routes.js";

import "./models/User.js";
import "./models/Link.js";


const app = express()
const port = process.env.PORT;

await sequelize.sync({ force:false });

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
    origin:"*"
}))
app.use("/", indexRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/link", linkRoutes);
app.use("/api/user", userRoutes);




app.listen(port,()=>{
    console.log(`Running at port: ${port}`);
})