// vite.config.ts
import { defineConfig } from "file:///D:/localhost/yarn/app_e-module_terintegrasi/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/localhost/yarn/app_e-module_terintegrasi/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import { VitePWA } from "file:///D:/localhost/yarn/app_e-module_terintegrasi/node_modules/vite-plugin-pwa/dist/index.js";
import AutoImport from "file:///D:/localhost/yarn/app_e-module_terintegrasi/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/localhost/yarn/app_e-module_terintegrasi/node_modules/unplugin-vue-components/dist/vite.mjs";
import webfontDownload from "file:///D:/localhost/yarn/app_e-module_terintegrasi/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import { VueUseDirectiveResolver } from "file:///D:/localhost/yarn/app_e-module_terintegrasi/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_dirname = "D:\\localhost\\yarn\\app_e-module_terintegrasi";
var vite_config_default = defineConfig({
  base: "./",
  mode: "development",
  plugins: [
    vue(),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: [],
        sourcemap: true
      },
      manifest: {
        name: "SEAFOD - E-Module Terintegrasi",
        short_name: "SEAFOD",
        theme_color: "#39b6bb",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "@vueuse/head",
        "@vueuse/core",
        {
          "@vueup/vue-quill": [
            "Quill",
            "getContents",
            "Delta"
          ]
        },
        {
          "quill-delta-to-html": [
            "QuillDeltaToHtmlConverter"
          ]
        },
        {
          "quill-image-uploader": [
            "ImageUploader"
          ]
        },
        {
          "file-dialog": [
            "fileDialog"
          ]
        },
        {
          "@hexagon/base64": [
            "base64"
          ]
        },
        {
          "firebase/firestore": [
            "collection",
            "query",
            "getDocs",
            "doc",
            "setDoc",
            "getDoc",
            "addDoc",
            "updateDoc",
            "where",
            "orderBy",
            "limit",
            "serverTimestamp",
            "arrayUnion",
            "arrayRemove"
          ]
        },
        {
          "firebase/auth": [
            "GoogleAuthProvider",
            "signInWithPopup",
            "setPersistence",
            "browserSessionPersistence",
            "onAuthStateChanged",
            "signOut",
            "reauthenticateWithCredential",
            ["promptForCredentials", "promptForUserCredentials"]
          ]
        },
        {
          "firebase/storage": [
            ["getStorage", "storage"],
            ["ref", "sref"],
            "uploadBytes",
            "uploadString",
            "getDownloadURL"
          ]
        },
        {
          "@vueuse/sound": [
            "useSound"
          ]
        }
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/firebase",
        "src/helpers",
        "src/stores"
      ],
      vueTemplate: true
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: [
        "src/views"
      ],
      // resolvers for custom components
      resolvers: [VueUseDirectiveResolver()],
      // generate `components.d.ts` global declarations,
      // also accepts a path for custom filename
      // default: `true` if package typescript is installed
      dts: "src/components.d.ts",
      // Allow subdirectories as namespace prefix for components.
      directoryAsNamespace: true,
      // Collapse same prefixes (camel-sensitive) of folders and components
      // to prevent duplication inside namespaced component name.
      // works when `directoryAsNamespace: true`
      collapseSamePrefixes: true
    }),
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap"
    ])
  ],
  //////
  build: {
    manifest: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "index.html")
        // 404: resolve(__dirname, "404.html"),
      }
    }
  },
  //////
  server: {
    port: 3080
  },
  //////
  preview: {
    port: 3081
  },
  //////
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src"),
      "@a": resolve(__vite_injected_original_dirname, "./src/assets"),
      "@v": resolve(__vite_injected_original_dirname, "./src/views")
    }
  },
  //////
  optimizeDeps: {
    exclude: ["vue-demi"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxsb2NhbGhvc3RcXFxceWFyblxcXFxhcHBfZS1tb2R1bGVfdGVyaW50ZWdyYXNpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxsb2NhbGhvc3RcXFxceWFyblxcXFxhcHBfZS1tb2R1bGVfdGVyaW50ZWdyYXNpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9sb2NhbGhvc3QveWFybi9hcHBfZS1tb2R1bGVfdGVyaW50ZWdyYXNpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB3ZWJmb250RG93bmxvYWQgZnJvbSAndml0ZS1wbHVnaW4td2ViZm9udC1kbCc7XG5pbXBvcnQgeyBWdWVVc2VEaXJlY3RpdmVSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiLi9cIixcbiAgbW9kZTogXCJkZXZlbG9wbWVudFwiLFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uc3ZnJywgJ3NhZmFyaS1waW5uZWQtdGFiLnN2ZyddLFxuICAgICAgd29ya2JveDoge1xuICAgICAgICBjbGVhbnVwT3V0ZGF0ZWRDYWNoZXM6IHRydWUsXG4gICAgICAgIGdsb2JQYXR0ZXJuczogW10sXG4gICAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnU0VBRk9EIC0gRS1Nb2R1bGUgVGVyaW50ZWdyYXNpJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1NFQUZPRCcsXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnIzM5YjZiYicsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd2dWUtcm91dGVyJyxcbiAgICAgICAgJ0B2dWV1c2UvaGVhZCcsXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgICB7XG4gICAgICAgICAgJ0B2dWV1cC92dWUtcXVpbGwnOiBbXG4gICAgICAgICAgICAnUXVpbGwnLFxuICAgICAgICAgICAgJ2dldENvbnRlbnRzJyxcbiAgICAgICAgICAgICdEZWx0YScsXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ3F1aWxsLWRlbHRhLXRvLWh0bWwnOiBbXG4gICAgICAgICAgICAnUXVpbGxEZWx0YVRvSHRtbENvbnZlcnRlcidcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAncXVpbGwtaW1hZ2UtdXBsb2FkZXInOiBbXG4gICAgICAgICAgICAnSW1hZ2VVcGxvYWRlcidcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnZmlsZS1kaWFsb2cnOiBbXG4gICAgICAgICAgICAnZmlsZURpYWxvZydcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIkBoZXhhZ29uL2Jhc2U2NFwiOiBbXG4gICAgICAgICAgICAnYmFzZTY0J1xuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdmaXJlYmFzZS9maXJlc3RvcmUnOiBbXG4gICAgICAgICAgICAnY29sbGVjdGlvbicsXG4gICAgICAgICAgICAncXVlcnknLFxuICAgICAgICAgICAgJ2dldERvY3MnLFxuICAgICAgICAgICAgJ2RvYycsXG4gICAgICAgICAgICAnc2V0RG9jJyxcbiAgICAgICAgICAgICdnZXREb2MnLFxuICAgICAgICAgICAgJ2FkZERvYycsXG4gICAgICAgICAgICAndXBkYXRlRG9jJyxcbiAgICAgICAgICAgICd3aGVyZScsXG4gICAgICAgICAgICAnb3JkZXJCeScsXG4gICAgICAgICAgICAnbGltaXQnLFxuICAgICAgICAgICAgJ3NlcnZlclRpbWVzdGFtcCcsXG4gICAgICAgICAgICAnYXJyYXlVbmlvbicsXG4gICAgICAgICAgICAnYXJyYXlSZW1vdmUnLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdmaXJlYmFzZS9hdXRoJzogW1xuICAgICAgICAgICAgJ0dvb2dsZUF1dGhQcm92aWRlcicsXG4gICAgICAgICAgICAnc2lnbkluV2l0aFBvcHVwJyxcbiAgICAgICAgICAgICdzZXRQZXJzaXN0ZW5jZScsXG4gICAgICAgICAgICAnYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZScsXG4gICAgICAgICAgICAnb25BdXRoU3RhdGVDaGFuZ2VkJyxcbiAgICAgICAgICAgICdzaWduT3V0JyxcbiAgICAgICAgICAgICdyZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsJyxcbiAgICAgICAgICAgIFsncHJvbXB0Rm9yQ3JlZGVudGlhbHMnLCAncHJvbXB0Rm9yVXNlckNyZWRlbnRpYWxzJ11cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnZmlyZWJhc2Uvc3RvcmFnZSc6IFtcbiAgICAgICAgICAgIFsnZ2V0U3RvcmFnZScsICdzdG9yYWdlJ10sXG4gICAgICAgICAgICBbXCJyZWZcIiwgJ3NyZWYnXSxcbiAgICAgICAgICAgICd1cGxvYWRCeXRlcycsXG4gICAgICAgICAgICAndXBsb2FkU3RyaW5nJyxcbiAgICAgICAgICAgICdnZXREb3dubG9hZFVSTCdcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnQHZ1ZXVzZS9zb3VuZCc6IFtcbiAgICAgICAgICAgICd1c2VTb3VuZCdcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZHRzOiAnc3JjL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICAgIGRpcnM6IFtcbiAgICAgICAgJ3NyYy9maXJlYmFzZScsXG4gICAgICAgICdzcmMvaGVscGVycycsXG4gICAgICAgICdzcmMvc3RvcmVzJyxcbiAgICAgIF0sXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgLy8gYWxsb3cgYXV0byBsb2FkIG1hcmtkb3duIGNvbXBvbmVudHMgdW5kZXIgYC4vc3JjL2NvbXBvbmVudHMvYFxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnXSxcbiAgICAgIC8vIGFsbG93IGF1dG8gaW1wb3J0IGFuZCByZWdpc3RlciBjb21wb25lbnRzIHVzZWQgaW4gbWFya2Rvd25cbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvXSxcbiAgICAgIGRpcnM6IFtcbiAgICAgICAgJ3NyYy92aWV3cycsXG4gICAgICBdLFxuICAgICAgLy8gcmVzb2x2ZXJzIGZvciBjdXN0b20gY29tcG9uZW50c1xuICAgICAgcmVzb2x2ZXJzOiBbVnVlVXNlRGlyZWN0aXZlUmVzb2x2ZXIoKV0sXG4gICAgICAvLyBnZW5lcmF0ZSBgY29tcG9uZW50cy5kLnRzYCBnbG9iYWwgZGVjbGFyYXRpb25zLFxuICAgICAgLy8gYWxzbyBhY2NlcHRzIGEgcGF0aCBmb3IgY3VzdG9tIGZpbGVuYW1lXG4gICAgICAvLyBkZWZhdWx0OiBgdHJ1ZWAgaWYgcGFja2FnZSB0eXBlc2NyaXB0IGlzIGluc3RhbGxlZFxuICAgICAgZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cycsXG4gICAgICAvLyBBbGxvdyBzdWJkaXJlY3RvcmllcyBhcyBuYW1lc3BhY2UgcHJlZml4IGZvciBjb21wb25lbnRzLlxuICAgICAgZGlyZWN0b3J5QXNOYW1lc3BhY2U6IHRydWUsXG4gICAgICAvLyBDb2xsYXBzZSBzYW1lIHByZWZpeGVzIChjYW1lbC1zZW5zaXRpdmUpIG9mIGZvbGRlcnMgYW5kIGNvbXBvbmVudHNcbiAgICAgIC8vIHRvIHByZXZlbnQgZHVwbGljYXRpb24gaW5zaWRlIG5hbWVzcGFjZWQgY29tcG9uZW50IG5hbWUuXG4gICAgICAvLyB3b3JrcyB3aGVuIGBkaXJlY3RvcnlBc05hbWVzcGFjZTogdHJ1ZWBcbiAgICAgIGNvbGxhcHNlU2FtZVByZWZpeGVzOiB0cnVlLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZlYXQtYWdlbmN5L3ZpdGUtcGx1Z2luLXdlYmZvbnQtZGxcbiAgICB3ZWJmb250RG93bmxvYWQoW1xuICAgICAgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvd2RpZXM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcIlxuICAgIF0pLFxuICBdLFxuICAvLy8vLy9cbiAgYnVpbGQ6IHtcbiAgICBtYW5pZmVzdDogdHJ1ZSxcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFpbjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiaW5kZXguaHRtbFwiKSxcbiAgICAgICAgLy8gNDA0OiByZXNvbHZlKF9fZGlybmFtZSwgXCI0MDQuaHRtbFwiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgLy8vLy8vXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwODBcbiAgfSxcbiAgLy8vLy8vXG4gIHByZXZpZXc6IHtcbiAgICBwb3J0OiAzMDgxXG4gIH0sXG4gIC8vLy8vL1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgJ0BhJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9hc3NldHMnKSxcbiAgICAgICdAdic6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvdmlld3MnKVxuICAgIH0sXG4gIH0sXG4gIC8vLy8vL1xuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ3Z1ZS1kZW1pJ11cbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJULFNBQVMsb0JBQW9CO0FBQ3hWLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFDeEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8scUJBQXFCO0FBQzVCLFNBQVMsK0JBQStCO0FBUHhDLElBQU0sbUNBQW1DO0FBVXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQTtBQUFBLElBRUosUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsZUFBZSxDQUFDLGVBQWUsdUJBQXVCO0FBQUEsTUFDdEQsU0FBUztBQUFBLFFBQ1AsdUJBQXVCO0FBQUEsUUFDdkIsY0FBYyxDQUFDO0FBQUEsUUFDZixXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUdE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
