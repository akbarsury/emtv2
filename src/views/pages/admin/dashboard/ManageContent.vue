<template>
  <main class="content p-3">
    <div class="d-flex flex-column gap-3" v-if="resolveContent">
      <div class="py-2 border-bottom border-secondary">
        <div class="row align-items-center">
          <div class="col-auto">
            <h1 class="h2 text-capitalize fw-bolder">
              {{
                urlToStringConverter(String(useRoute().params.selectedContent))
              }}
            </h1>
          </div>
          <div class="col-auto">
            <button
              v-if="
                appStore.appCacheData[`${appStore.activeContent.data.name}`]
              "
              :class="[
                'update-button button-style small',
                appStore.appCacheData[`${appStore.activeContent.data.name}`]
                  .updatedAt !== 0 &&
                appStore.appCacheData[`${appStore.activeContent.data.name}`]
                  .foundAt !==
                  appStore.appCacheData[`${appStore.activeContent.data.name}`]
                    .updatedAt
                  ? 'bg-success'
                  : 'bg-secondary',
              ]"
              style="height: fit-content"
              :disabled="
                !(
                  appStore.appCacheData[`${appStore.activeContent.data.name}`]
                    .updatedAt !== 0 &&
                  appStore.appCacheData[`${appStore.activeContent.data.name}`]
                    .foundAt !==
                    appStore.appCacheData[`${appStore.activeContent.data.name}`]
                      .updatedAt
                )
              "
              @click="updateContentDoc()"
            >
              simpan perubahan
              <ComponentsLoader
                class="d-inline"
                v-if="
                  appStore.appCacheData[`${appStore.activeContent.data.name}`]
                    .updating
                "
              />
            </button>
          </div>
        </div>
      </div>
      <ComponentsAdminDashboardContentHeader
        v-if="
          appStore.appCacheData[`${appStore.activeContent.data.name}`] &&
          !['overview', 'siswa', 'evaluasi akhir'].includes(
            appStore.activeContent.data.name
          ) &&
          Object.keys(route.query).length <= 0
        "
      />
      <pagesAdminDashboardOverview
        class="bg-light rounded-5 shadow p-3"
        v-if="
          urlToStringConverter(appStore.activeContent.data.name) === 'overview'
        "
      />
      <pagesAdminDashboardManageStudent
        class="bg-light rounded-5 shadow p-3"
        v-else-if="
          urlToStringConverter(appStore.activeContent.data.name) === 'siswa'
        "
      />
      <PagesAdminDashboardManageFinalEvaluation
        class="bg-light rounded-5 shadow p-3"
        v-else-if="
          urlToStringConverter(appStore.activeContent.data.name) ===
          'evaluasi akhir'
        "
      />
      <pagesAdminDashboardManageApplicationContent
        class="bg-light rounded-5 shadow p-3"
        v-else-if="
          appStore.activeContent.data.collection === 'application content'
        "
      />
      <pagesAdminDashboardManageLearningMaterials
        class="bg-light rounded-5 shadow p-3"
        v-else-if="
          appStore.activeContent.data.collection === 'learning materials'
        "
      />
      <div v-else>
        <ComponentsLoader class="fw-bolder h2" />
      </div>
    </div>
    <div v-else>
      <ComponentsLoader class="fw-bolder h2" />
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();

const appStore = AppStore();

const resolveContent = ref(false);
const resolvingContent = () => {
  resolveContent.value = false;
  appStore.activeContent.data = { name: "", collection: null };
  appStore.activeContent.data = {
    ...appStore.activeContent.data,
    ...appStore.appData.menu.find(
      (x: any) =>
        x.name === urlToStringConverter(String(route.params.selectedContent))
    ),
  };
  if (appStore.appCacheData[`${appStore.activeContent.data.name}`]) {
    setTimeout(() => {
      resolveContent.value = true;
    }, 1000);
  } else {
    const count = ref(0);
    appStore.appData.menu.forEach((x: any) => {
      AppDB.getContentDoc(x.collection, x.name).then((x: any) => {
        count.value++;
        appStore.appCacheData[`${x.name}`] = {
          ...x,
          foundAt: useTimestamp().value,
          updatedAt: 0,
          updating: false,
          lastSelectedSubContent:
            x.subContent.length > 0 ? x.subContent[0].id : 0,
        };
        if (count.value === appStore.appData.menu.length) {
          setTimeout(() => {
            resolveContent.value = true;
          }, 1000);
        }
      });
    });
  }
};

resolvingContent();

useRouter().afterEach(async (to) => {
  resolvingContent();
});

const updateContentDoc = () => {
  appStore.appCacheData[`${appStore.activeContent.data.name}`].updating = true;
  const data: any = {
    name: appStore.appCacheData[`${appStore.activeContent.data.name}`].name,
    subContent:
      appStore.appCacheData[`${appStore.activeContent.data.name}`].subContent,
  };

  if (appStore.activeContent.data.name === "pembelajaran") {
    data.evaluation =
      appStore.appCacheData[`${appStore.activeContent.data.name}`].evaluation;
  }

  if (appStore.activeContent.data.name === "evaluasi akhir") {
    data.data =
      appStore.appCacheData[`${appStore.activeContent.data.name}`].data;
  }

  AppDB.updateContentDoc(
    appStore.activeContent.data.collection,
    appStore.activeContent.data.name,
    data
  )
    .then((x: any) => {
      if (x.status) {
        alert("perubahan disimpan");
        appStore.appCacheData[`${appStore.activeContent.data.name}`].updatedAt =
          Number(useTimestamp().value);
        appStore.appCacheData[`${appStore.activeContent.data.name}`].foundAt =
          appStore.appCacheData[
            `${appStore.activeContent.data.name}`
          ].updatedAt;
        appStore.appCacheData[`${appStore.activeContent.data.name}`].updating =
          false;
      } else {
        appStore.appCacheData[`${appStore.activeContent.data.name}`].updating =
          false;
        alert("perubahan gagal disimpan");
      }
    })
    .catch(() => {
      appStore.appCacheData[`${appStore.activeContent.data.name}`].updating =
        false;
      alert("perubahan gagal disimpan");
    });
};
</script>

<style scoped lang="scss">
.content {
  position: relative;
}

button.update-button[disabled] {
  cursor: not-allowed !important;
}
</style>
