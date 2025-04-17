<script setup lang="ts">
const router = useRouter();
const route = useRoute();

const appStore = AppStore();

const subContent: any = appStore.appData.subContentActive;
const pageLength = ref();
if (route.meta.playing) {
  pageLength.value = subContent?.pages.length;
}
//////
</script>

<template>
  <footer class="animate__animated animate__zoomIn p-0">
    <div class="container" v-if="route.name === 'play'">
      <div class="d-flex justify-content-around gap-5 px-5">
        <button
          v-if="
            Number(route.query.page) <
              Number(
                Object(appStore.appData.subContentActive)?.pages?.length
              ) &&
            Number(Object(appStore.appData.subContentActive).pages?.length) !==
              1
          "
          class="footer-select-content button-style bg-warning text-light px-auto"
          @click="router.back()"
        >
          kembali
        </button>
        <button
          v-if="
            Number(route.query.page) <
            Number(Object(appStore.appData.subContentActive)?.pages?.length)
          "
          class="footer-select-content button-style bg-primary text-light px-auto"
          @click="
            router.push({
              query: {
                sub: route.query.sub,
                page: Number(route.query.page) + 1,
              },
            })
          "
        >
          Lanjutkan
          <i class="fa-solid fa-chevrons-right" />
        </button>
        <button
          v-if="
            Number(route.query.page) ===
              Number(
                Object(appStore.appData.subContentActive)?.pages?.length
              ) && useRoute().params.playingContent !== 'pembelajaran'
          "
          class="footer-select-content button-style bg-success text-light px-auto"
          @click="router.go(-Number(route.query.page))"
        >
          selesai
        </button>
        <button
          v-if="
            Number(route.query.page) ===
              Number(
                Object(appStore.appData.subContentActive)?.pages?.length
              ) && useRoute().params.playingContent === 'pembelajaran'
          "
          class="footer-select-content button-style bg-success text-light px-auto"
          @click="
            router.push({
              query: {
                evaluation: route.query.sub,
              },
            })
          "
        >
          evaluasi
        </button>
        <button
          v-if="
            (urlToStringConverter(String(useRoute().params.playingContent)) ===
              'pembelajaran' &&
              useRoute().query.evaluation) ||
            urlToStringConverter(String(useRoute().params.playingContent)) ===
              'evaluasi akhir'
          "
          class="footer-select-content button-style bg-warning text-light px-auto"
          @click="
            router.push({
              name: 'menu',
            })
          "
        >
          kembali ke menu utama
        </button>
      </div>
      <div class="text-center" v-if="!useRoute().query.evaluation">
        {{ route.query.page }} /
        {{ Object(appStore.appData.subContentActive)?.pages?.length }}
      </div>
    </div>
    <div class="content-footer">
      <div class="container">
        <div class="d-flex flex-row-reverse">
          <div class="col-auto">
            <div class="d-flex flex-column align-items-end gap-2">
              <span
                :class="[
                  `class-module h4 text-uppercase`,
                  route.name !== `landing` ? `g-text-transparent` : ``,
                ]"
                >kelas v</span
              >
              <span
                :class="[
                  `class-thema-subthema h4 text-capitalize`,
                  route.name !== `landing` ? `g-text-transparent` : ``,
                ]"
                >tema 3 - subtema 1</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 3rem;
  padding-bottom: 20px;

  button {
    position: relative;
    z-index: 1;
  }
}

.footer-select-content {
  position: relative;
}

///////////////
.content-footer {
  position: absolute;
  bottom: 3rem;
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

.app-version {
  position: absolute;
  width: 100%;
  height: 20px;
  bottom: 0;
  font-weight: bolder;
  font-size: smaller;
}
</style>
