import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dermacure Clinic - Professional Dermatology & Aesthetic Services",
  description: "Expert dermatology and aesthetic treatments. Transform your skin with our professional services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
