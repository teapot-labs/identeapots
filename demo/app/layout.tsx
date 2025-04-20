import Footer from "@components/footer";
import ThemeToggle from "@components/theme-toggle";
import clsx from "clsx/lite";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teapot Labs' Identeapots",
  description: "Demo page for Teapot Labs' Identeapots npm package",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classString = clsx(
    "mx-auto flex min-h-screen max-w-screen-lg flex-col items-end",
    inter.variable,
    "antialiased",
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={classString}>
        <ThemeProvider>
          <ThemeToggle className="me-4 mt-4 sm:absolute sm:top-0 sm:right-0" />
          <main className="flex w-full flex-1 flex-col items-center justify-center p-4">{children}</main>
          <Footer className="w-full" />
        </ThemeProvider>
      </body>
    </html>
  );
}
