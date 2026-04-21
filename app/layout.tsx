import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "Robots.txt Generator - Create robots.txt File | robots-txt-generator",
  description:
    "Free online robots.txt generator. Create, validate, and download robots.txt files for your website. Configure user-agent rules, sitemaps, crawl-delay, and more.",
  keywords: [
    "robots.txt generator",
    "robots txt creator",
    "create robots.txt",
    "robots.txt file",
    "seo robots.txt",
    "robots txt builder",
  ],
  authors: [{ name: "robots-txt-generator" }],
  openGraph: {
    title: "Robots.txt Generator - Create robots.txt File",
    description:
      "Free online tool to create and validate robots.txt files. Configure crawl rules, sitemaps, and download instantly.",
    url: "https://robots-txt-generator.vercel.app",
    siteName: "robots-txt-generator",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robots.txt Generator - Create robots.txt File",
    description:
      "Free online tool to create and validate robots.txt files. Configure crawl rules, sitemaps, and download instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://robots-txt-generator.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Robots.txt Generator",
              description:
                "Free online robots.txt generator. Create, validate, and download robots.txt files with an intuitive visual editor.",
              url: "https://robots-txt-generator.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Visual robots.txt editor",
                "Multiple user-agent rules",
                "Sitemap URL configuration",
                "Crawl-delay settings",
                "Common presets",
                "Real-time validation",
                "One-click copy and download",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
