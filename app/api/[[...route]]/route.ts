import { Hono } from "hono";
import { handle } from "hono/vercel";
import userRoute from "./users";
import { HTTPException } from "hono/http-exception";
export const runtime = "edge";

const app = new Hono()
  .basePath("/api")
  .route("/users", userRoute)
  .onError((err, c) => {
    if (err instanceof HTTPException) {
      return err.getResponse();
    }

    return c.json({
      error: "Internal Server Error",
    }, 500);
  });

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof app;
