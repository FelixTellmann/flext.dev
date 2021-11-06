import upstash from "@upstash/redis";

export const redis = upstash(process.env.REDIS_URL, process.env.REDIS_TOKEN);
