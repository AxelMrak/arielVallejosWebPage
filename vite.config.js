import { defineConfig } from 'vite';
import  VitePluginSitemap  from 'vite-plugin-sitemap';
import react from '@vitejs/plugin-react';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/terapias', name: 'Terapias' },
  { path: '/contacto', name: 'Contacto' },
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginSitemap({
      baseUrl: 'https://terapiasariel.com',
      contentBase: 'public',
      routes: routes,
      urlGenHook: (config) => {
        let updatedRoutes = config.routes;

        /** put any logic here that you want to run before the sitemap.xml file is generated 
         * ex: generate URLs for all of your blog posts
         */

        return updatedRoutes;
      }
    })
  
  ],
  server: {
    host: true,
  },
})
