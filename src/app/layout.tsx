import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { type_second } from "@/functions/font";

export const metadata: Metadata = {
  title: "Dogs Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={type_second.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
