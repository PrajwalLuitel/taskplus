import Modal from "@/components/Modal";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "TaskPlus",
  description: "AI Powered Task Management Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="my_gradient  bg-fixed pb-16">
        {children}
        <Modal />
      </body>
    </html>
  );
}
