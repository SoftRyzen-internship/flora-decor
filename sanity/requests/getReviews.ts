import { client } from '../lib/client';
import { reviewsQuery } from './querries/reviewsQuery';

export const getReviews = async () => {
  const reviews = await client.fetch(reviewsQuery);
  return reviews;
};
