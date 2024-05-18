import { Hono } from "hono";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { eq } from "drizzle-orm";
const app = new Hono().get("/", clerkMiddleware(), async (c) => {
  const auth = getAuth(c);
  if (!auth?.userId) {
    return c.json(
      {
        error: "Unauthorized",
      },
      401
    );
  }
  const data = await db
    .select({
      id: users.id,
      name: users.name,
    })
    .from(users)
    .where(eq(users.userId, auth.userId));
  return c.json({
    data,
  });
});

export default app;
