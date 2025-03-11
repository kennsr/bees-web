import type { Metadata } from "next";
import { Poppins  } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import { Navbar } from "@/components/global/navbar";


export const metadata: Metadata = {
  title: "Bees Education",
  description: "Learning ain't a chore, it's a lifestyle!",
};

const nohemiFont = localFont({
  src: [
    {
      path: '../fonts/Nohemi-Regular.woff',
      weight: "400",
      style: 'normal',
    },
    {
      path: '../fonts/Nohemi-ExtraBold.woff',
      weight: "800",
      style: 'normal',
    },
    {
      path: '../fonts/Nohemi-Bold.woff',
      weight: "700",
      style: 'normal',
    },
    {
      path: '../fonts/Nohemi-SemiBold.woff',
      weight: "600",
      style: 'normal',
    },
    {
      path: '../fonts/Nohemi-Medium.woff',
      weight: "500",
      style: 'normal',
    },
    {
      path: '../fonts/Nohemi-Light.woff',
      weight: "300",
      style: 'normal',
    },
    {
      path: '../fonts/Nohemi-ExtraLight.woff',
      weight: "200",
      style: 'normal',
    },
    {
      path: '../fonts/Nohemi-Thin.woff',
      weight: "100",
      style: 'normal',
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
      <body
        className={`h-full w-full antialiased`}
      >
        <div className="flex flex-col h-full w-full min-h-screen justify-start ">
          <div className="h-fit w-full bg-blue-50">
          <Navbar />
          </div>
          <div className="flex flex-1 w-full">
           {children}
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
