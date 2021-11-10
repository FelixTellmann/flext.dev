import Upstash from "@upstash/redis";

export const redis = Upstash(process.env.REDIS_URL, process.env.REDIS_TOKEN);
