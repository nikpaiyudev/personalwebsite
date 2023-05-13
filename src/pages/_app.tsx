import BaseLayout from "@/components/BaseLayout";
import Web3ModalProvider from "@/providers/web3.provider";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ModalProvider>
      <ThemeProvider attribute="class">
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </ThemeProvider>
    </Web3ModalProvider>
  );
}
