import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import routes from "./routes";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { prisma };
