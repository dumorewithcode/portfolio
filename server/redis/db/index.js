import redis from 'redis';
import rejson from 'redis-rejson';
import keys from '../../src/keys'
import {promisify} from 'util';

rejson(redis);

const db = redis.createClient(keys.REDIS_URL);

module.exports = {
    ...db,
    getAsync: promisify(db.json_get).bind(client),
    setAsync: promisify(db.json_set).bind(client),
    
}