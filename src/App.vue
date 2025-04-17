<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <ComponentsSplash v-if="splashScreen && appStore.loadedApp.value" />
        <component
          :is="Component"
          v-else-if="!splashScreen && appStore.loadedApp.value"
        />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
// import menuSoundSfx from "@a/sound/menu.mp3";

const appStore = AppStore();

useHead({
  title: "SEAFOD",
  titleTemplate: (title: any) =>
    `${
      title === "SEAFOD" ? title : title + " - SEAFOD"
    } | E-Module Terintegrasi`,
  meta: [
    {
      charset: "UTF-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0 max-scale=1.0",
    },
    {
      name: "description",
      content: "E-Module Terintegrasi - SEAFOD | Sex education for children",
    },
    {
      name: "theme-color",
      content: "#39b6bb",
    },
    {
      name: "msapplication-config",
      content: "/browserconfig.xml",
    },
    {
      name: "msapplication-TileColor",
      content: "#39b6bb",
    },
  ],
  link: [
    {
      rel: "shortcut icon",
      type: "image/svg+xml",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#39b6bb",
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css",
      integrity:
        "sha512-Z0kTB03S7BU+JFU0nw9mjSBcRnZm2Bvm0tzOX9/OuOuz01XQfOpa0w/N9u6Jf2f1OAdegdIPWZ9nIZZ+keEvBw==",
      crossorigin: "anonymous",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap",
      crossorigin: "anonymous",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js",
      integrity:
        "sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==",
      crossorigin: "anonymous",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.3.1/mdb.min.js",
      integrity:
        "sha512-DXEKT9U5aI4s0iPRILUN6itJ0BkIdMYmJg+nnirpdAklNOz972QQhjvdHYnDCn+5W/HBvAiXYG2UaHEHH87gpg==",
      crossorigin: "anonymous",
    },
  ],
});

//// App starting
const devMode = ref(import.meta.env.DEV);
const appName = ref("seafod");
const router = useRouter();

const splashScreen = ref(true);

if (!devMode) {
  setTimeout(() => {
    splashScreen.value = false;
  }, 8000);
} else {
  setTimeout(() => {
    splashScreen.value = false;
  }, 500);
}

router.isReady().then(() => {
  AppStore()
    .loadApp(appName.value)
    .then(() => {});
});

// const menuSound = reactive({
//   userConfigPlayingMenuSound: true,
//   volume: .2
// });

// const {
//   play: playMenuSound,
//   stop: stopMenuSound,
//   isPlaying: isPlayingMenuSound,
// } = useSound(menuSoundSfx, { interrupt: true, volume: menuSound.volume });

// router.afterEach((to, from) => {
//   playMenuSound();
//   if (menuSound.userConfigPlayingMenuSound) {
//     if (to.matched.find(rtr => rtr.name == 'user') && from.matched.find(rtr => rtr.name != 'user')) {
//       if (isPlayingMenuSound === false)
//         return playMenuSound()
//       else true
//     }
//   }
//   if (to.matched.find(rtr => rtr.name == 'play')) {
//     if (!(to != from)) {
//       console.log(`RO FROM - ${!(to != from)}`);
//       stopMenuSound()
//     }
//   }
// })

// watch(isPlayingMenuSound, (value: any) => {
//   if (menuSound.userConfigPlayingMenuSound) {
//     if (value !== menuSound.userConfigPlayingMenuSound) {
//       playMenuSound();
//     }
//   } else {
//     watchEffect(() => { });
//     menuSound.userConfigPlayingMenuSound = false
//     stopMenuSound();
//   }
// });
</script>

<style scoped></style>
