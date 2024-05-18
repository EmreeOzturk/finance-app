import { pgTable, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  userId: text("user_id").notNull().unique(),
  plaidId: text("plaid_id"),
});

export const insertUserSchema = createInsertSchema(users);
