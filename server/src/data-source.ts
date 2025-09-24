import "reflect-metadata";
import { DataSource } from "typeorm";
import { Quotes } from "./entities/Quote";


export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST || "localhost",
  port: Number(process.env.PGPORT || 5432),
  username: process.env.PGUSER || "postgres",
  password: process.env.PGPASSWORD || "welcome@2025",
  database: process.env.PGDATABASE || "book_quotes",
  schema: "public",
  synchronize: true, // dev only
  logging: false,
  entities: [Quotes],
});
