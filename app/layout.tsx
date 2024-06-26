import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
import QueryProvider from "./providers/QueryProvider";
import SheetProvider from "./providers/SheetProvider";
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
  title: "Finance App",
  description: "A finance app built with Clerk and Hono/Bun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="antialiased">
        <body className={inter.className}>
          <QueryProvider>
            <SheetProvider />
            <Toaster />
            {children}
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
