import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Header from "./components/Header";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShipDelight",
  description: "ShipDelight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AntdRegistry>
        <body className={inter.className}>
          <Header/>
          {children}
          <Footer />
        </body>
      </AntdRegistry>
    </html>
  );
}
