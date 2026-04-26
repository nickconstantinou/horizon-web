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
  title: "Horizon AI — UK Retirement Planning, Finally Clear",
  description:
    "The pension access age rises to 57 in April 2028. If you planned to retire before then, you need a plan. Horizon AI works out your SIPP/ISA sequence, State Pension timing, and ISA bridge — no IFA required.",
  openGraph: {
    title: "Horizon AI — UK Retirement Planning, Finally Clear",
    description:
      "Model your SIPP/ISA drawdown sequence, 2028 NMPA impact, and State Pension timing. No jargon. No IFA fees.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
