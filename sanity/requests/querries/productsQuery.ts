import { groq } from 'next-sanity';

export const productsQuery = groq`*[_type == 'products'] | order(_updatedAt desc){
    _id,
    product,
    price,
    "image": image.asset->url, 
    volumes
}`;
