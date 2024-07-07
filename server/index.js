import express from "express";
import userRoutes from "./routes/user.routes.js";
import cors from 'cors'
import { config} from 'dotenv'
config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PATCH", "DELETE"]
}))

app.use(express.urlencoded({extended: true}))
// app.use(express.urlencoded({extended: true}));

app.use(express.json())
app.use("/api/users/", userRoutes)

app.listen(3000, (req, res) => {
    console.log("server running on port 3000...");
})