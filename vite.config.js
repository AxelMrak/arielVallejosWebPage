import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from "vite-plugin-pwa";
import { VitePluginSitemap } from "@tormak/vite-plugin-sitemap";

const routes = [
  { path: "/", name: "Inicio" },
  { path: "/terapias", name: "Terapias" },
  { path: "/contacto", name: "Contacto" }
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      manifest: {
        name: "Ariel Vallejos",
        short_name: "Terapias",
        start_url: "/",
        icons: [
          {
            src: "/logo.png",
            type: "image/png",
            sizes: "50x50",
          },
          {
            src: "/logo.png",
            type: "image/png",
            sizes: "150x150",
          },
          {
            src: "/logo.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
        display: "fullscreen",
        description:
          "Terapias alternativas de la mano del terapeuta holístico Ariel Vallejos.",
      },
    }),
    VitePluginSitemap({
      baseUrl: "https://terapiasariel.com",
      contentBase: "public",
      routes: routes,
      urlGenHook: (config) => {
        const updatedRoutes = config.routes;

        /** put any logic here that you want to run before the sitemap.xml file is generated
         * ex: generate URLs for all of your blog posts
         */

        return updatedRoutes;
      },
    }),
  ],
  server: {
    host: true
  }
})
