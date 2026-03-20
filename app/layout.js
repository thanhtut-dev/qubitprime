import { Orbitron, Sora } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-sora',
});

export const metadata = {
  title: 'Qubit Prime — Beyond Binary',
  description: 'Empowering small businesses with world-class Odoo custom modules and cutting-edge digital solutions.',
  keywords: 'Odoo, custom modules, ERP, small business, Thailand, tech',
  openGraph: {
    title: 'Qubit Prime — Beyond Binary',
    description: 'Empowering small businesses with world-class Odoo custom modules.',
    url: 'https://qubitprime.io',
    siteName: 'Qubit Prime',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${orbitron.variable} ${sora.variable}`}>
        {children}
      </body>
    </html>
  );
}