import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectDB();

app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads'))

app.get("/", (req, res) => {
  res.send("📡📡📡📡📡📡📡📡📡 API Working 📡📡📡📡📡📡📡📡📡");
});

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
