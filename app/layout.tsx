import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merry Christmas",
  description: "Merry Christmas from Rafe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-pink-100 flex flex-col dotted-bg`}
      >
        {children}
      </body>
    </html>
  );
}
