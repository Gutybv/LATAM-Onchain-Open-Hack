import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { scrollSepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [scrollSepolia],
  ssr: true,
});
