import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Refresh RSC on focus",
  description:
    "This app refreshes its server components whenever the window is focused.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-white">{children}</body>
    </html>
  );
}
