import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/navbar.css";
import { ThemeProvider } from "next-themes";
// import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
// import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // const [primaryColor, setPrimaryColor] = useState("#ff6600"); // vous pouvez définir une couleur par défaut ici

  // useEffect(() => {
  //   // Ceci s'exécute uniquement côté client après le rendu
  //   const color = getComputedStyle(document.documentElement)
  //     .getPropertyValue("--primaryColor")
  //     .trim();
  //   setPrimaryColor(color);
  // }, []);

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: primaryColor,
  //     },
  //   },
  // });

  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
