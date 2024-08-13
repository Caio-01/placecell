import type { Metadata } from "next";
import { Bebas_Neue, Rubik } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "900"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "PlaceCell",
  description: "phone store project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable}`}>
      <body className={bebasNeue.className}>{children}</body>
    </html>
  );
}
