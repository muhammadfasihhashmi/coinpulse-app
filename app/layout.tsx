import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoinPulse",
  description:
    "Crypto Screener App With a Built-In High-Frequency Terminal and Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
