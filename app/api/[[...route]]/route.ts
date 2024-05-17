import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from "@hono/zod-validator";
export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = {};

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
