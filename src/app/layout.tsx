import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { BackToTopButton } from '@/components/layout/back-to-top-button';
import { WhatsAppButton } from '@/components/layout/whatsapp-button';

export const metadata: Metadata = {
  title: 'HostSim - Host & Network Simulations',
  description:
    'Interactive, visual learning experiences for networking, systems, security, and cloud technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased', 'min-h-screen bg-background')}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-6 focus:z-[1001] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-md"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <Toaster />
          <BackToTopButton />
          <WhatsAppButton phoneNumber="+1234567890" />
        </ThemeProvider>
      </body>
    </html>
  );
}
