import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(express.json())
app.use("/api/users/", userRoutes)

app.listen(3000, (req, res) => {
    console.log("server running on port 3000...");
})