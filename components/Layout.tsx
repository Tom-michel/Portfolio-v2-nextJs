import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Container } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div
        style={{
          overflowX: "hidden",
        }}
      >
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  );
}
