import { createClient, SchemaFieldTypes } from 'redis';

const redis = createClient({
	url: 'redis-12707.c245.us-east-1-3.ec2.cloud.redislabs.com',
	password: 'aHesY06UFGLTPZaCDYATh9ff6TEODzB5'
});

redis.connect();

const results = await redis.ft.search('idx:Sefaria', '@species:{dog}', {});
