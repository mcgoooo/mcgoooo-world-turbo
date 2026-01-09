import { Hono } from "hono";
import { Env } from "../types/Env";

export const healthCheckRoute = new Hono<{ Bindings: Env }>();

healthCheckRoute.get("/healthcheck", async (c) => {
  c.status(200)
  return c.text('Ola amigo from stage!');
});
