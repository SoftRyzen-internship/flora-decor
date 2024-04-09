import { groq } from 'next-sanity';

export const productsQuery = groq`*[_type == 'products']{
    _id,
    product,
    price,
    "image": image.asset->url,
    volumes
}`;
