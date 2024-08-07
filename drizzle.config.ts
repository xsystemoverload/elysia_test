import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema.ts",
  out: "./src/database/drizzle",
  verbose: true,
  strict: true,
  dbCredentials: {
    url: String(process.env.DB_URL),
  },
});