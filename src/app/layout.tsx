import { ClientBackground } from "@/components/global/client-background";
import { Header } from "@/components/global/header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bees Education",
  description: "Learning ain't a chore, it's a lifestyle!",
  icons: {
    icon: "/favicon.svg", // Path to your SVG favicon
  },
};

const nohemiFont = localFont({
  src: [
    {
      path: "../fonts/Nohemi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-ExtraLight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-Thin.woff",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nohemiFont.variable} ${poppins.variable} `}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="64x64" />
      </head>
      <body className={`h-full w-full antialiased`}>
        <div className="flex h-full min-h-screen w-full flex-col justify-start">
          {/* Use a client component to handle the query parameter check */}
          <ClientBackground />
          {/* HEADER */}
          <Header />
          <div className="flex w-full flex-1">{children}</div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
