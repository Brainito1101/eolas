import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  title: 'Eolas - Empowering Agents with Edge, Reach, and Trace',
  description: 'Advanced AI agent platform providing trading capabilities, social engagement, and complete transparency.',
  keywords: 'AI agents, trading, social media, transparency, automation',
  authors: [{ name: 'Eolas' }],
  creator: 'Eolas',
  openGraph: {
    title: 'Eolas - Empowering Agents with Edge, Reach, and Trace',
    description: 'Advanced AI agent platform providing trading capabilities, social engagement, and complete transparency.',
    url: 'https://www.eolas.fun/',
    siteName: 'Eolas',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eolas - Empowering Agents with Edge, Reach, and Trace',
    description: 'Advanced AI agent platform providing trading capabilities, social engagement, and complete transparency.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}