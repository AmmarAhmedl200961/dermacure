import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://dermacure.vercel.app'),
  title: "Derma Cure | Best Dermatologist in Lahore - Dr. Uzma Khalil",
  description: "Board Certified Dermatologist specializing in Acne, Eczema, and Laser treatments. Book your consultation today.",
  keywords: ["dermatology", "dermatologist", "skin care", "acne treatment", "fungal infection", "laser treatment", "aesthetic dermatology", "Lahore", "Derma Cure", "anti-aging", "skin rejuvenation", "Dr. Uzma Khalil", "best dermatologist Lahore"],
  authors: [{ name: "Derma Cure" }],
  openGraph: {
    title: "Derma Cure | Best Dermatologist in Lahore - Dr. Uzma Khalil",
    description: "Board Certified Dermatologist specializing in Acne, Eczema, and Laser treatments. Book your consultation today.",
    url: "https://dermacure.vercel.app",
    siteName: "Derma Cure",
    images: [
      {
        url: "/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Derma Cure - Professional Dermatology Clinic in Lahore",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derma Cure | Best Dermatologist in Lahore - Dr. Uzma Khalil",
    description: "Board Certified Dermatologist specializing in Acne, Eczema, and Laser treatments. Book your consultation today.",
    images: ["/hero-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dermatology",
    "name": "Derma Cure",
    "image": "https://dermacure.vercel.app/hero-banner.jpg",
    "@id": "https://dermacure.vercel.app",
    "url": "https://dermacure.vercel.app",
    "telephone": "+923304620676",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "43 Green Acres Main Rd, Block B T & T Aabpara Housing Society",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "54000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.412135,
      "longitude": 74.240428
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "19:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "17:00",
        "closes": "22:00"
      }
    ],
    "priceRange": "$",
    "employee": {
      "@type": "Person",
      "name": "Dr. Uzma Khalil",
      "jobTitle": "Board Certified Dermatologist",
      "description": "20+ Years Experience in Medical & Aesthetic Dermatology"
    }
  };

  return (
    <html lang="en">
      <head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics gaId="G-2P87LRKM6R" />
        {children}
      </body>
    </html>
  );
}
