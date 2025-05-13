import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Container } from './components/Container';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Gerenciador de Produtos',
    template: '%s | Gerenciador de Produtos',
  },
  description: 'Gerenciador para lista de produtos',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={inter.className}>
        <Main>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </Main>
      </body>
    </html>
  );
}
