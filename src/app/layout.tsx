import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Rupa Jaiswal | Expert General Physician in Kharghar",
  description: "Trusted General Physician in Sector 13, Kharghar. Expert consultations for family health at Sharda Apartment. Visit Dr. Rupa Jaiswal today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased font-[family-name:var(--font-outfit)]`}
      >
        {children}
      </body>
    </html>
  );
}
