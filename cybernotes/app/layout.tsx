import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KTU Cyber Security Notes",
  description:
    "A platform to access study materials and syllabi for students of b tech computer science engineering (syber security) in KTU university",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="module"
          src="https://securepubads.shareus.io/scripts/tag/js/gpt.js"
          async
        ></script>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-3E9CVT98PP" />
        <div id="shareus-admanager-8188567387-rqqS8xm7Or">
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window._shareustag = window._shareustag || {cmd:[]};
                _shareustag.cmd.push(function() {
                  var slot1 = _shareustag.defineSlot('/shareus-admanager/8188567387/rqqS8xm7Or/Bodyad', ["Responsive"], 'shareus-admanager-8188567387-rqqS8xm7Or');
                });
              `,
            }}
            
          ></script>
        </div>
      </body>
    </html>
  );
}