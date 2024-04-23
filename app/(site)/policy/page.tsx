import { Policy } from '@/sections/Policy';

import { getPolicy } from '@/sanity/requests/getPolicy';

const page = async () => {
  const policy = await getPolicy();

  return <Policy data={policy} />;
};

export default page;
