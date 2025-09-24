import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Quotes } from "../entities/Quote";

const repo = AppDataSource.getRepository(Quotes);

export async function listQuotes(req: Request, res: Response) {
  const quotes = await repo.find({ order: { id: "ASC" }, take: 10 });
  res.json(quotes);
}

export async function createQuote(req: Request, res: Response) {
  const { text, author, bookTitle } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  const quote = repo.create({ text, author, bookTitle });
  await repo.save(quote);
  res.status(201).json(quote);
}

export async function likeQuote(req: Request, res: Response) {
  const { id } = req.params;
  const quote = await repo.findOneBy({ id: Number(id) });
  if (!quote) return res.status(404).json({ error: "Not found" });

  quote.likes += 1;
  await repo.save(quote);
  res.json(quote);
}
