import "./globals.css";
import type { Metadata } from "next";

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
      <body className="bg-white text-black antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
