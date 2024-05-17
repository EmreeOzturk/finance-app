import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from "@hono/zod-validator";
export const runtime = "edge";

const app = new Hono().basePath("/api");
app.use("*", clerkMiddleware());
app
  .get("/hello", (c) => {
    const auth = getAuth(c);
    if (!auth?.userId) {
      return c.json({
        message: "You are not logged in.",
      });
    }
    return c.json({
      message: "You are logged in!",
      userId: auth.userId,
    });
  })
  .get(
    "/hello/:name{[a-zA-Z]+}",
    zValidator(
      "param",
      z.object({
        name: z.string(),
      })
    ),
    (c) => {
      const { name } = c.req.valid("param");
      return c.json({
        message: `Hello ${name}!`,
      });
    }
  );

export const GET = handle(app);
export const POST = handle(app);
