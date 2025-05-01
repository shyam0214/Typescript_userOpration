import session from 'express-session';
import connectRedis from 'connect-redis';
import redisClient from './redis';

const RedisStore = connectRedis(session);

const sessionMiddleware = session({
  store: new RedisStore({ client: redisClient as any }),
  secret: process.env.SESSION_SECRET as string,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60, 
  },
});
export default sessionMiddleware;
