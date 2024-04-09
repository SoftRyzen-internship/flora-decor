import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImageDesktop = (source: Image) => {
  return imageBuilder
    ?.image(source)
    .auto('format')
    .fit('max')
    .size(344, 420)
    .url();
};
export const urlForImageTabletAndMobile = (source: Image) => {
  return imageBuilder
    ?.image(source)
    .auto('format')
    .fit('max')
    .size(262, 320)
    .url();
};
