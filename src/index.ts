import express from "express";
import { Request, Response } from "express"; // Should work, but let’s ensure clarity

const app = express();

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from the TypeScript backend!" }); // Ensure res has json
});

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
