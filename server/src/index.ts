import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

console.log('path',path.resolve(__dirname, '../../.env'))

import express from "express";
import cors from "cors";
import morgan from "morgan";
import { AppDataSource } from "./data-source";
import quotesRoutes from "./routes/quotesRoutes";

const allowedOrigins = [
  'https://vetri-book-quote-shorts.netlify.app'
];

const app = express();

app.use(cors({
  origin: allowedOrigins,
}));
app.use(express.json());
app.use(morgan("tiny"));

app.get("/health", (_, res) => res.json({ ok: true }));

app.use("/api/quotes", quotesRoutes);

const port = process.env.PORT || 4000;

(async () => {
  try {
    await AppDataSource.initialize();
    console.log("DB connected");
    app.listen(port, () => console.log(`API running on port ${port}`));
  } catch (err) {
    console.error("Startup error:", err);
    process.exit(1);
  }

})();
