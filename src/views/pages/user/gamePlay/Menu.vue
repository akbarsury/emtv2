<script setup lang="ts">
const router = useRouter();

const userStore = UserStore();
const appStore = AppStore();

const resolveContent = () => {
  if (!AppStore().appCacheData[`${AppStore().activeContent.data.name}`]) {
    AppStore()
      .appData.menu.slice(2)
      .forEach((x: any) => {
        AppDB.getContentDoc(x.collection, x.name).then((x: any) => {
          AppStore().appCacheData[`${x.name}`] = {
            ...x,
            foundAt: useTimestamp().value,
            updatedAt: 0,
            updating: false,
            lastSelectedSubContent:
              x.subContent.length > 0 ? x.subContent[0].id : 0,
          };
        });
      });
  }
};

resolveContent();

useRouter().afterEach(() => {
  resolveContent();
});

///////
const userSignOut = () => {
  signOut(Authentication).then(() => {
    UserStore().user.id = null;
    router.push({ name: "landing" });
  });
  // appAuth.userTryToSignOut().then((x: any) => {
  //   x ? (alert("berhasil keluar"), router.push({ name: "landing" })) : true;
  // });
};

const menu: any = reactive({
  title: ["main menu"],
  subContent: false,
});

// globalStore().activeContent = { loadContent: false };

const menuClik = (selectedMenu: string) => {
  if (!menu.subContent) {
    const subContentArray = Object.entries(
      Object(AppStore().appCacheData[`${selectedMenu}`].subContent)
    );
    if (
      Object.keys(Object(AppStore().appCacheData[`${selectedMenu}`].subContent))
        .length > 1
    ) {
      menu.subMenu = Object.entries(
        Object(AppStore().appCacheData[`${selectedMenu}`].subContent)
      );
      menu.subContent = true;
      menu.selectedMenu = selectedMenu;
      menu.title.push(selectedMenu);
    } else {
      // main menu !== evaluasi akhir
      if (selectedMenu !== "evaluasi akhir") {
        router.push({
          name: "play",
          params: {
            playingContent: stringToUrlConverter(String(selectedMenu)),
          },
          query: {
            sub: subContentArray[0][0],
            page: 1,
          },
        });
      } else {
        // main menu === evaluasi akhir
        router.push({
          name: "play",
          params: {
            playingContent: stringToUrlConverter(String(selectedMenu)),
          },
        });
      }
    }
  } else {
    // submenu
    router.push({
      name: "play",
      params: {
        playingContent: stringToUrlConverter(String(menu.selectedMenu)),
      },
      query: {
        sub: selectedMenu,
        page: 1,
      },
    });
  }
};
const backToMainMenu = () => {
  menu.subContent = false;
  menu.title.pop();
};
</script>

<template>
  <div>
    <div class="content d-flex flex-column my-4 gap-2">
      <ComponentsEMTTitle class="animate__animated animate__zoomInUp" />
      <div
        class="animate__animated animate__zoomInUp d-flex justify-content-center"
      >
        <span
          class="text-capitalize text-light bg-warning rounded-pill p-2 px-4"
        >
          Hello, {{ userStore.user.appData.name }}
        </span>
      </div>
      <div
        class="menu animate__animated animate__fadeInUpBig d-flex flex-column justify-content-center shadow rounded-9 p-4"
      >
        <div class="animate__animated animate__zoomIn">
          <div class="menu-header">
            <h1
              class="h5 title-style text-uppercase fw-bolder text-center mb-3"
            >
              {{ menu.title.slice(menu.title.length - 1)[0] }}
            </h1>
          </div>
          <div>
            <div
              class="menu-link-wrapper animate__animated animate__zoomIn d-flex flex-column gap-3 mb-3"
              v-if="!menu.subContent"
            >
              <button
                v-for="(content, key) in appStore.appData.menu.slice(2)"
                :key="key"
                @click="menuClik(Object(content).name)"
                class="input-style bg-primary text-white"
              >
                {{ Object(content).name }}
              </button>
              <button
                class="input-style bg-danger text-white"
                @click="userSignOut()"
              >
                keluar
              </button>
            </div>
            <div
              v-else
              class="submenu-link-wrapper animate__animated animate__zoomIn d-flex flex-column gap-3 mb-3"
            >
              <button
                v-for="(subMenu, key) in menu.subMenu"
                :key="key"
                @click="menuClik(Object(subMenu)[0])"
                class="input-style bg-primary text-white"
              >
                {{ Object(subMenu)[1].name }}
              </button>
              <button
                class="input-style bg-warning text-white"
                @click="backToMainMenu()"
              >
                kembali ke menu utama
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  height: max-content;
  width: 100%;

  .menu {
    // flex: 1;
    background-color: rgba(#ffffff, 0.75);
    align-items: stretch;
  }
}

.content-footer {
  position: absolute;
  z-index: -1;
  bottom: 0px;
  right: 5%;

  .class-module,
  .class-thema-subthema {
    display: inline-flex;
    width: fit-content;
    padding: 0.2rem 1rem;
    font-weight: 700;
    border-radius: 1rem;
    ////
    background-color: rgba(#ffffff, 0.5);
    background-blend-mode: multiply;
  }
}
</style>
