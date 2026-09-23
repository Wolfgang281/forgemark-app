import dotenv from "dotenv";
import { z } from "zod";

dotenv.config({ debug: true });

const envSchema = z.object({
  PORT: z.coerce.number().int().positive(),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  MONGODB_URL: z.url(),
  REDIS_URL: z.url(),
  FIREBASE_PROJECT_ID: z.string().min(1),
  FIREBASE_CLIENT_EMAIL: z.email(),
  FIREBASE_PRIVATE_KEY: z.string().min(1),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Invalid environment variables:", z.treeifyError(parsedEnv.error));
  process.exit(1);
}

export const env = parsedEnv.data;
