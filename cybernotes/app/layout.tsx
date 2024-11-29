import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KTU Cyber Security Notes",
  description: "A platform to access study materials and syllabi for students of b tech computer science engineering (syber security) in KTU university",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>{children}
      <Analytics />
      <GoogleAnalytics gaId="G-3E9CVT98PP" />
      </body>
    </html>
    
  );
}
