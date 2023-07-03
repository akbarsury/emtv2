import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import { VitePWA } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import webfontDownload from 'vite-plugin-webfont-dl';
import { VueUseDirectiveResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  mode: "development",
  plugins: [
    vue(),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: [],
        sourcemap: true,
      },
      manifest: {
        name: 'SEAFOD - E-Module Terintegrasi',
        short_name: 'SEAFOD',
        theme_color: '#39b6bb',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
        {
          '@vueup/vue-quill': [
            'Quill',
            'getContents',
            'Delta',
          ]
        },
        {
          'quill-delta-to-html': [
            'QuillDeltaToHtmlConverter'
          ]
        },
        {
          'quill-image-uploader': [
            'ImageUploader'
          ]
        },
        {
          'file-dialog': [
            'fileDialog'
          ]
        },
        {
          "@hexagon/base64": [
            'base64'
          ]
        },
        {
          'firebase/firestore': [
            'collection',
            'query',
            'getDocs',
            'doc',
            'setDoc',
            'getDoc',
            'addDoc',
            'updateDoc',
            'where',
            'orderBy',
            'limit',
            'serverTimestamp',
            'arrayUnion',
            'arrayRemove',
          ]
        },
        {
          'firebase/auth': [
            'GoogleAuthProvider',
            'signInWithPopup',
            'setPersistence',
            'browserSessionPersistence',
            'onAuthStateChanged',
            'signOut',
            'reauthenticateWithCredential',
            ['promptForCredentials', 'promptForUserCredentials']
          ]
        },
        {
          'firebase/storage': [
            ['getStorage', 'storage'],
            ["ref", 'sref'],
            'uploadBytes',
            'uploadString',
            'getDownloadURL'
          ]
        },
        {
          '@vueuse/sound': [
            'useSound'
          ]
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/firebase',
        'src/helpers',
        'src/stores',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: [
        'src/views',
      ],
      // resolvers for custom components
      resolvers: [VueUseDirectiveResolver()],
      // generate `components.d.ts` global declarations,
      // also accepts a path for custom filename
      // default: `true` if package typescript is installed
      dts: 'src/components.d.ts',
      // Allow subdirectories as namespace prefix for components.
      directoryAsNamespace: true,
      // Collapse same prefixes (camel-sensitive) of folders and components
      // to prevent duplication inside namespaced component name.
      // works when `directoryAsNamespace: true`
      collapseSamePrefixes: true,
    }),

    // https://github.com/feat-agency/vite-plugin-webfont-dl
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap"
    ]),
  ],
  //////
  build: {
    manifest: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // 404: resolve(__dirname, "404.html"),
      },
    },
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
      '@': resolve(__dirname, './src'),
      '@a': resolve(__dirname, './src/assets'),
      '@v': resolve(__dirname, './src/views')
    },
  },
  //////
  optimizeDeps: {
    exclude: ['vue-demi']
  },
})
