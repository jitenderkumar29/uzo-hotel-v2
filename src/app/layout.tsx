import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AppRoutes from "@/components/AppRoutes/AppRoutes";
import { HotelSearchProvider } from "./Context/HotelSearchContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UZO Hotels",
  description: "Created By UZO Hotels",
  icons: {
    icon: [
      {
        url: "/favicon.ico", // Standard favicon
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png", // 16x16 pixel favicon
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png", // 32x32 pixel favicon
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png", // For iOS devices
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const login = true; // Replace this with your actual login state logic
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HotelSearchProvider>
          <AppRoutes />
          {children}
        </HotelSearchProvider>
      </body>
    </html>
  );
}
