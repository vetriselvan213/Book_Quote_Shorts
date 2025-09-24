import { Router } from "express";
import { listQuotes, createQuote, likeQuote } from "../controllers/quotesController";

const router = Router();

router.get("/", listQuotes);
router.post("/", createQuote);
router.post("/:id/like", likeQuote);

export default router;
    