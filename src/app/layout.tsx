'use client'

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/ui/Header";
import "./globals.css";
import SideNav from "@/components/header/SideNav";
import Categories from "@/components/header/Categories";
import { useState } from "react";

const inter = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  }
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-neutral-900`}>
        <Header handleClick={handleClick}/>
        <Categories />
        <div className="flex relative">
          <SideNav handleClick={handleClick} isOpen={isOpen}/>
          {children}
        </div>
      </body>
    </html>
  );
}
