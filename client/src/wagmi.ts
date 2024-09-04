import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { baseSepolia, scrollSepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [baseSepolia],
  ssr: true,
});
