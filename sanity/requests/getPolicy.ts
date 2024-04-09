import { client } from '../lib/client';
import { policyQuery } from './querries/policy';

export const getPolicy = async () => {
  const policy = await client.fetch(policyQuery);
  return policy[0].content;
};
