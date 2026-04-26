import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Jobs to Close — Turn Website Visitors Into Booked Jobs",
  description:
    "Embeddable chat and lead qualification for HVAC, plumbing, roofing, and other local service businesses. Capture contact info, qualify urgency, and route leads instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
        <Script
          src="https://site-chat-production.up.railway.app/widget.js"
          data-client-id="ramos-james-law"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
