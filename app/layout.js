import { Inter } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/MainNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Tutorial",
  description: "Build awesome stuff with Next.js!",
};

export default function RootLayout({ children }) {
  console.log("layout");
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <MainNavigation />
        <main className="py-20 px-6 max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
