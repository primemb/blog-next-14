import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClientCookiesProvider } from "@/providers/cookies-provider";
import { cookies } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog post",
  description: "simple blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ClientCookiesProvider value={cookies().getAll()}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="blog-theme"
          >
            <Toaster position="top-right" closeButton />
            {children}
          </ThemeProvider>
        </ClientCookiesProvider>
      </body>
    </html>
  );
}
