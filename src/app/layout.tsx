import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";

const notosans = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Taiwania",
  description: "Your best Taiwanese dictionary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${notosans.className} bg-emerald-50/[75%] overflow-y-scroll`}
      >
        <div
          className="
          bg-[#6ee7b7]/50 absolute top-[-6rem] left-1/2 transform -translate-x-1/2 
          -z-10 h-[30rem] w-[70%] rounded-full blur-[5rem] sm:w-[100%]"
        > 
          {" "}
        </div>

        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
