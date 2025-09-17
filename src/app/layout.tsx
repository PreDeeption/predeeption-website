import './globals.css';
import { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
