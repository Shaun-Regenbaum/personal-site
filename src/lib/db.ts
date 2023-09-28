import Redis from 'ioredis';
import { env } from '$env/dynamic/public';
import { PostHog } from 'posthog-node';

export const db = new Redis({
	host: env.PUBLIC_REDIS_HOST,
	port: 12707,
	password: env.PUBLIC_REDIS_PASSWORD
});

export const hog = new PostHog('phc_lp0AtwI6ZNgilkjihYqdthiNcWYY1ul2dhgWt7aF99B', {
	host: 'https://app.posthog.com'
});
