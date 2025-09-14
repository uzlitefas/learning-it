import type { Metadata } from "next";
import { Barlow_Condensed, Ubuntu } from "next/font/google";
import "./globals.css";
import { children_Props } from "@/types";

const ubuntu = Ubuntu({
  variable: "--font-Ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--fint_Barlow_Condensed",
  weight: ["300", "400", "500", "700", "100", "200", "600", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Website",
  description: "this website is not ready",
};

export default function RootLayout({ children }: children_Props) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.variable} ${ubuntu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
