import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/navbar.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";

// export const metadata: Metadata = {
//   title: {
//     template: "%s | Michel Btompe",
//     default: "Michel Btompe - Software Engineer",
//   },
//   description:
//     "Michel Btompe ist a Cameroonian Software Engineer with a passion for Code: 'I like to build or improve innovative solutions to everyday problems in society'",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://michelbtompe.vercel.app",
//     siteName: "Michel Btompe - Software Engineer",
//     images: [
//       {
//         url: `${banner}`,
//         width: 1350,
//         height: 744,
//         alt: "Michel Btompe",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@Tom-Michel",
//     creator: "@Tom-michel",
//     images: [
//       {
//         url: `${banner}`,
//         width: 1350,
//         height: 744,
//         alt: "Michel Btompe",
//       },
//     ],
//   },
//   authors: [{ name: "Michel Btompe", url: "https://michelbtompe.vercel.app" }],
//   keywords: "portfolio, profile, software, dev",
// };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Michel Btompe - Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Michel Btompe is a Cameroonian Software Engineer with a passion for Code: 'I like to build or improve innovative solutions to everyday problems in society'"
        />
        <link rel="icon" href="https://michelbtompe.vercel.app/icon.png" />
        <link rel="icon" href="/icon.png" />

        <link rel="apple-touch-icon" href="/banner.png" />
        <meta property="og:url" content="https://michelbtompe.vercel.app/" />

        <meta property="og:type" content="website" />
        <meta
          property="og:site_name:"
          content="Michel Btompe - Software Engineer"
        />
        <meta property="og:title" content="Michel Btompe - Software Engineer" />
        <meta
          property="og:description"
          content="Michel Btompe is a Cameroonian Software Engineer with a passion for Code: 'I like to build or improve innovative solutions to everyday problems in society'"
        />
        <meta
          property="og:image"
          content="https://michelbtompe.vercel.app/banner.png"
        />
        <meta property="og:image" content="/banner.png" />
      </Head>
      {/* <main className={GeistMono.className}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </main> */}
    </ThemeProvider>
  );
}
