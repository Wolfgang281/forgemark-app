import { Redis } from "ioredis";

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379", {
  maxRetriesPerRequest: null,
});

redis.on("connect", () => {
  console.log(`Redis Connected`);
});

redis.on("error", (error: Error) => {
  console.error(`Redis Error`);
  console.log(JSON.stringify(error, null, 2));
});

export default redis;
