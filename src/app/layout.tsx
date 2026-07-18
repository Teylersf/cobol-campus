import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cobol-campus.vercel.app"),
  title: { default: "COBOL Campus — Learn the language that runs the world", template: "%s | COBOL Campus" },
  description: "The complete, free COBOL learning resource: guided lessons, a searchable language reference, and production-inspired sample applications.",
  openGraph: { title: "COBOL Campus", description: "Master the language that runs the world.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${sans.variable} ${mono.variable}`}><body>{children}</body></html>;
}
