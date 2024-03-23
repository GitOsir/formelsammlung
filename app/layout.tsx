import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./globals.css";



export const metadata: Metadata = {
  title: "Formelsammlung",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
