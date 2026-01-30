import "./globals.css";
import type { Metadata } from "next";
import Nav_bar from "@/src/components/Nav_bar";
import Overview from "@/src/components/Overview";

export const metadata: Metadata = {
  title: "Kadir Salami",
  description: "Coherence-led leadership and digital transformation",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        <Nav_bar />
        {/* <Overview /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
