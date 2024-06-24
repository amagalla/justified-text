import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.status(200).send('Hello from node');
});

export default router;
