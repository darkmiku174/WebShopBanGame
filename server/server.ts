import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db";
import cors from "cors";

import sampleRoutes from "./routes/sampleRoutes";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" })); // will be changed later?

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/sample", sampleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
