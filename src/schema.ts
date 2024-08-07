import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 25 }).notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  created_at: text("created_at").notNull().default("now()")
});

export const test = pgTable("test", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 25 }).notNull().unique(),
  description: text("description").notNull(),
  created_at: text("created_at").notNull().default("now()")
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;