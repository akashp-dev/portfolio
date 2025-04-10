import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { StrictMode } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akash Ponnam | Data Analyst",
  description: "Akash Ponnam is a Data Analyst skilled in SQL, Python, AWS, Power BI, and modern cloud data platforms.",
  keywords: ["Data Analyst", "SQL", "Python", "Power BI", "Snowflake", "AWS", "Data Engineering"],
  authors: [{ name: "Akash Ponnam" }],
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        href: '/favicon.ico',
      }
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="text-neutral-300 selection:bg-white-300 selection:text-cyan-900">
      <body className="overflow-x-hidden antialiased bg-[#877E95]">
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </div>
        <StrictMode>
          <ClientBody>{children}</ClientBody>
        </StrictMode>
      </body>
    </html>
  );
}
