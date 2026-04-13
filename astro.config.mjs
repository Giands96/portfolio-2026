// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-Inter",
      options: {
        variants: [
          {
            weight: "400 500 600 700 800 900",
            style: "normal",
            src: ["./src/assets/fonts/inter-variable.woff2"],
          }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Akira Expanded",
      cssVariable: "--font-AkiraExpanded",
      options: {
        variants: [
          {
            weight: "400 500 600 700 800 900",
            style: "normal",
            src: ["./src/assets/fonts/akira-expanded.woff2"],
          }
        ]
      }
    }
  ]
}
);