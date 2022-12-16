import Redis from 'ioredis';

export const db = new Redis({
	host: 'redis-12707.c245.us-east-1-3.ec2.cloud.redislabs.com',
	port: 12707,
	password: 'aHesY06UFGLTPZaCDYATh9ff6TEODzB5'
});

