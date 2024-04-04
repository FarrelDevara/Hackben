import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
    title: "HackBen",
    description: "",
  };
  
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      <Navbar/>
        {children}
        <Footer/>
      </>
    );
  }
  