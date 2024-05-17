import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
export const runtime = "edge";

const app = new Hono().basePath("/api");

app
  .get("/hello", (c) => {
    return c.json({
      message: "Hello Next.js!",
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
