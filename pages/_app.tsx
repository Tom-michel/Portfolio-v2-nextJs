import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/navbar.css";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import banner from "../assets/banner.png";

export const metadata: Metadata = {
  title: {
    template: "%s | Michel BTOMPE",
    default: "Michel BTOMPE - Software Engineer",
  },
  description:
    "Michel BTOMPE ist a Cameroonian Software Engineer with a passion for Code: 'I like to build or improve innovative solutions to everyday problems in society'",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://michelbtompe.vercel.app",
    siteName: "Michel BTOMPE - Software Engineer",
    images: [
      {
        url: `${banner}`,
        width: 1350,
        height: 744,
        alt: "Michel BTOMPE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Tom-Michel",
    creator: "@Tom-michel",
    images: [
      {
        url: `${banner}`,
        width: 1350,
        height: 744,
        alt: "Michel BTOMPE",
      },
    ],
  },
  authors: [{ name: "Michel BTOMPE", url: "https://michelbtompe.vercel.app" }],
  keywords: "portfolio, profile, software, dev",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
