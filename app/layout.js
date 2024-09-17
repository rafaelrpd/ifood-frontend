// app/layout.js

import 'bootstrap/dist/css/bootstrap.min.css';
import Providers from './Providers';

export const metadata = {
  title: 'iFood Backoffice',
  description: 'Sistema de gestão financeira para parceiros do iFood',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
