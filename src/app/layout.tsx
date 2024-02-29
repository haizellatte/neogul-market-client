import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "심효은 | 너굴마켓",
  description: "심효은 Full-Stack Time-Attack 과제입니다.",
  icons: {
    icon: "./logo.ico",
  },
};

export default function HTMLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scrollbar-hide">
      <head>
        <link rel="icon" href="/path/to/logo.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Hahmlet:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
