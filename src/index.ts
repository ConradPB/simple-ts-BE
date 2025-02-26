import express from "express";
import { Request, Response } from "express"; // Separate import for types

const app = express(); // Let TypeScript infer the type

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from the TypeScript backend!" });
});

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
