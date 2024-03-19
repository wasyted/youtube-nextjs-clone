import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/ui/Header";
import "./globals.css";
import SideNav from "./components/header/SideNav";
import Categories from "./components/header/Categories";

const inter = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"]});

export const metadata: Metadata = {
  title: "YouTube Clone",
  description: "Created by Matias Wasyluk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-neutral-950`}>
        <Header />
        <Categories />
        <div className="flex relative">
          <SideNav />
          {children}
        </div>
      </body>
    </html>
  );
}
