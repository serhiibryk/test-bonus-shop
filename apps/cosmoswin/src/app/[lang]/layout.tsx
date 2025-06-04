import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div id="app-content">
      {children}
    </div>
  );
};
