import express from "express";
import userRoutes from "@/routes/userRoutes";
import { Request, Response, NextFunction } from "express";
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
app.use("/api/users", userRoutes);
app.get("/", function (req, res) {
  res.status(200).json({ time: new Date().toISOString() });
  res.status(200).json({
    data: { time: new Date().toISOString() },
    status: 200,
    message: "Welcome",
  });
});
app.use((req, res, next) => {
  res.status(404).json({
    data: {},
    status: 404,
    message: "Not Found",
  });
});
app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    data: {},
    status: 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
