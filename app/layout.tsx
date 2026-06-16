import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Parv | Full Stack Developer & Systems Engineer",
  description:
    "Portfolio of Parv, a Full Stack Developer and Systems Engineer building developer tools, distributed systems, and local-first runtimes.",
  keywords: [
    "Full Stack Developer",
    "Systems Engineer",
    "Software Engineer",
    "Next.js Developer",
    "TypeScript Developer",
    "Distributed Systems",
    "Systems Programming",
    "Open Source",
  ],
  openGraph: {
    title: "Parv | Full Stack Developer & Systems Engineer",
    description:
      "Full Stack Developer and Systems Engineer building developer tools, distributed systems, and local-first runtimes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
