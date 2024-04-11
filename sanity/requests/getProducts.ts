import { client } from '../lib/client';
import { productsQuery } from './querries/productsQuery';

export const getProducts = async () => {
  const products = await client.fetch(productsQuery);
  return products;
};
