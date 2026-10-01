import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BNPAL — Digital experiences that move businesses forward",
  description: "BNPAL creates premium digital products, brands and growth experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
