import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImageDesktopLarge = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url();
};
export const urlForImageDesktop = (source: Image) => {
  return imageBuilder
    ?.image(source)
    .auto('format')
    .fit('max')
    .size(344, 420)
    .url();
};
export const urlForImageTabletAndMobileLarge = (source: Image) => {
  return imageBuilder
    ?.image(source)
    .auto('format')
    .fit('max')
    .size(524, 639)
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
