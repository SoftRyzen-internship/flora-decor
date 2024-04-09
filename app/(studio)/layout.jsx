import React from 'react';

export const metadata = {
  title: 'Flora-decor адміністратор',
  description: 'Flora-decor панель адміністратора',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
