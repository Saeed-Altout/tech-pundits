import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tech Pundits",
  description:
    "Tech Pundits, a company specializing in software development and tech consulting, aims to become a leader in technological innovation by developing advanced software solutions that meet client needs and contribute to improving digital efficiency on a global scale. Our focus is on delivering exceptional digital experiences and empowering businesses.",
  keywords: [
    "Tech Pundits",
    "software development",
    "tech consulting",
    "digital efficiency",
    "innovation",
    "advanced software solutions",
    "digital experiences",
    "business empowerment",
  ],
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/logo-icon-dark.svg",
        href: "/icons/logo-icon-dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/logo-icon-dark.svg",
        href: "/icons/logo-icon-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>{children}</body>
    </html>
  );
}
