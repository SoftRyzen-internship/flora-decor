import React from 'react';

import data from '@/data/meta/admin.json';

export const metadata = {
  title: `${data.metadataAdmin.title}`,
  description: `${data.metadataAdmin.description}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
