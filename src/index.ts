import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";

import userRoutes from "./routes/user.routes";

const app = new Elysia();

app
  .use(swagger({
    path: "/docs"
  }));
  app.get("/", () => `The Home`);
  app.use(userRoutes);
  app.listen(3000);
console.log(Bun.env.DATABASE_URL);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
