<script setup lang="ts">
import playingHeaderIcon from "@a/images/icon/writing.png";

const route = useRoute();
const router = useRouter();

const appStore = AppStore();

const content = urlToStringConverter(String(route.params.playingContent));
const sub = urlToStringConverter(String(route.query.sub));
const subContent: { name?: any; pages?: any } = reactive({
  name: Object(appStore.appCacheData[`${content}`].subContent)[`${sub}`]?.name,
  pages: Object(appStore.appCacheData[`${content}`].subContent)[`${sub}`]?.page,
});
appStore.appData.subContentActive = subContent;

const loaded = ref(false);
setTimeout(() => {
  loaded.value = true;
}, 1000);

router.afterEach(() => {
  loaded.value = false;
  setTimeout(() => {
    loaded.value = true;
  }, 1000);
});
</script>

<template>
  <div>
    <div class="content d-flex flex-column gap-4" v-if="loaded">
      <div
        class="playing-header mb-3"
        v-if="
          (urlToStringConverter(String(useRoute().params.playingContent)) ===
            'pembelajaran' &&
            useRoute().query.evaluation) ||
          urlToStringConverter(String(useRoute().params.playingContent)) ===
            'evaluasi akhir'
        "
      >
        <div
          class="playing-header-icon"
          :style="{ backgroundImage: `url(${playingHeaderIcon})` }"
        ></div>
        <h1
          class="h5 d-inline-block title-style text-uppercase fw-bolder mb-3 p-2 px-4"
        >
          {{
            subContent?.name
              ? subContent?.name
              : appStore.activeContent.data.name
          }}
        </h1>
      </div>
      <PagesUserGamePlayEvaluation
        class="playing animate__animated animate__fadeInUpBig d-flex flex-column justify-content-center shadow rounded-9 p-4 m-2"
        v-if="
          urlToStringConverter(String(useRoute().params.playingContent)) ===
            'pembelajaran' && useRoute().query.evaluation
        "
      />
      <PagesUserGamePlayFinalEvaluation
        class="playing animate__animated animate__fadeInUpBig d-flex flex-column justify-content-center shadow rounded-9 p-4 m-2"
        v-else-if="
          urlToStringConverter(String(useRoute().params.playingContent)) ===
          'evaluasi akhir'
        "
      />
      <div
        class="playing animate__animated animate__fadeInUpBig d-flex flex-column justify-content-center shadow rounded-9 p-4 m-2"
        v-else
      >
        <div class="playing-header mb-3">
          <div
            class="playing-header-icon"
            :style="{ backgroundImage: `url(${playingHeaderIcon})` }"
          ></div>
          <h1
            class="h5 d-inline-block title-style text-uppercase fw-bolder mb-3 p-2 px-4"
          >
            {{ subContent.name }}
          </h1>
        </div>
        <div class="playing-content d-flex flex-column">
          <div
            v-if="
              Object(
                Object.values(
                  subContent.pages[`${Number(route.query.page) - 1}`]
                )[0]
              ).type === 'delta'
            "
            v-html="
              appStore
                .quilToHTML({
                  ops: Object(
                    Object.values(
                      subContent.pages[`${Number(route.query.page) - 1}`]
                    )[0]
                  ).data.ops,
                })
                .convert()
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  height: fit-content;
  width: 100%;
  height: 100%;

  .playing {
    // flex: 1;
    background-color: rgba(#ffffff, 0.75);
    align-items: stretch;

    .playing-header {
      position: relative;
      height: max-content;

      .playing-header-icon {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: -10px;
        height: 65px;
        width: 65px;
        color: transparent;
      }

      h1 {
        background-color: var(--mdb-primary);
        border-radius: var(--mdb-border-radius-pill);
        text-align: start;
        margin-left: 45px !important;
        color: var(--mdb-light);
      }
    }

    .playing-content {
      p {
        text-align: justify;

        &::before {
          content: "";
          color: transparent;
          width: 45px;
          display: inline-block;
        }
      }
    }
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
