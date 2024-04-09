import { groq } from 'next-sanity';

export const reviewsQuery = groq`*[_type == 'reviews']{
    _id,
    name,
    city,
    text
}`;
