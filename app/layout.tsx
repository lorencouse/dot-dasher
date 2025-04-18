import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { UserProvider } from '@/lib/auth';
import { getUser } from '@/lib/db/queries';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { Navbar } from '@/components/layout/navbar';

export const metadata: Metadata = {
  title: 'Dot Dasher',
  description: 'Get started quickly with Next.js, Postgres, and Stripe.',
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userPromise = getUser();

  return (
    <html
      lang="en"
      className={`bg-background dark:bg-foreground text-foreground dark:text-background ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UserProvider userPromise={userPromise}>
            <Navbar />
            {children}
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
