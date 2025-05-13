import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { StrictMode } from "react";
import { InteractiveLight } from "@/components/ui/InteractiveLight";

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
    <html lang="en" className="text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
      <body className="overflow-x-hidden antialiased">
        <InteractiveLight />
        <StrictMode>
          <ClientBody>{children}</ClientBody>
        </StrictMode>
      </body>
    </html>
  );
}
