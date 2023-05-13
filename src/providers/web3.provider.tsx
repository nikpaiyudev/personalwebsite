import { FC, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import RainbowThemeContext from "@/context/rainbow-theme.context";
import { createPublicClient, http } from "viem";

interface IModalProvider {
  children: JSX.Element;
}

const Web3ModalProvider: FC<IModalProvider> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme());
  const { chains } = configureChains(
    [mainnet],
    [
      publicProvider(),
      alchemyProvider({ apiKey: process.env.ALCHEMY_ID as string }),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "My Website",
    chains,
  });

  const config = createConfig({
    autoConnect: true,
    connectors,
    publicClient: createPublicClient({
      chain: mainnet,
      transport: http(),
    }),
  });

  return (
    <RainbowThemeContext.Provider value={{ updateTheme: setCurrentTheme }}>
      <WagmiConfig config={config}>
        <RainbowKitProvider
          modalSize={"compact"}
          theme={currentTheme}
          chains={chains}
        >
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </RainbowThemeContext.Provider>
  );
};

export default Web3ModalProvider;
