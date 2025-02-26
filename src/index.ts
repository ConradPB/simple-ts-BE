import express from "express";
import { Request, Response as ExpressResponse } from "express";

const app = express();

app.get("/api/hello", (req: Request, res: ExpressResponse) => {
  res.json({ message: "Hello from the TypeScript backend!" });
});
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
