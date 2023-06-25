import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "block",
});

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
    <html lang="en" className="h-full text-gray-900 bg-gray-800">
      <body className={`${inter.className} antialiased font-sans h-full`}>
        {children}
      </body>
    </html>
  );
}
