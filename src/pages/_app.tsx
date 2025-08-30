import Image from "next/image";
import type { AppProps } from "next/app";
import { StrictMode } from "react";

import logoImg from "../assets/logo.svg";

import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <Container>
        <Header>
          <Image src={logoImg} alt="Logo" />
        </Header>
        <Component {...pageProps} />
      </Container>
    </StrictMode>
  );
}
