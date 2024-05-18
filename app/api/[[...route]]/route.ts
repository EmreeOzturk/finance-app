import { Hono } from "hono";
import { handle } from "hono/vercel";
import userRoute from "./users";
export const runtime = "edge";

const app = new Hono().basePath("/api").route("/users", userRoute);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof app;
