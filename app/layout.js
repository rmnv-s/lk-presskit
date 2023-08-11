import './globals.css';
import Wrapper from '@/components/wrapper/wrapper';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import localFont from 'next/font/local';
const helvetica = localFont({
  src: [
    {
      path: './components/assets/fonts/helvetica.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './components/assets/fonts/helvetica-bold.woff',
      weight: '700',
      style: 'bold',
    },
  ],
});

export const metadata = {
  title: 'Linda Kristel press kit',
  description: 'Linda Kristel press kit',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={helvetica.className}>
        <Wrapper>
          <Header />
          {children}
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
