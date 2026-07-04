import { RateLimiter } from 'limiter';

export const limiter = new RateLimiter({
  fireImmediately: true,
  interval: 'min',
  tokensPerInterval: 5,
});
