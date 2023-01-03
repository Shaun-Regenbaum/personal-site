import Redis from 'ioredis';
import { env } from '$env/dynamic/public';

export const db = new Redis({
	host: env.PUBLIC_REDIS_HOST,
	port: 12707,
	password: env.PUBLIC_REDIS_PASSWORD
});
