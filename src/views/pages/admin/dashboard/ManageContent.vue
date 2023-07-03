<template>
  <main class="content p-3 ">
    <div class=" d-flex flex-column gap-3" v-if="resolveContent">
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
            <button v-if="AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
                " :class="[
          'update-button button-style small',
          AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
            .updatedAt !== 0 &&
            AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
              .foundAt !==
            AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
              .updatedAt
            ? 'bg-success'
            : 'bg-secondary',
        ]" style="height: fit-content" :disabled="!(
          AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
            .updatedAt !== 0 &&
          AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
            .foundAt !==
          AppStore().appCacheData[
            `${AppStore().activeContent.data.name}`
          ].updatedAt
        )
        " @click="updateContentDoc()">
              simpan perubahan
              <ComponentsLoader class="d-inline" v-if="AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
                    .updating
                  " />
            </button>
          </div>
        </div>
      </div>
      <ComponentsAdminDashboardContentHeader v-if="(
            AppStore().appCacheData[`${AppStore().activeContent.data.name}`] &&
            !['overview', 'siswa', 'evaluasi akhir'].includes((AppStore().activeContent.data.name))
            &&
            Object.keys(route.query).length <= 0)
          " />
      <pagesAdminDashboardOverview class="bg-light rounded-5 shadow p-3"
        v-if="urlToStringConverter(AppStore().activeContent.data.name) === 'overview'" />
      <pagesAdminDashboardManageStudent class="bg-light rounded-5 shadow p-3"
        v-else-if="urlToStringConverter(AppStore().activeContent.data.name) === 'siswa'" />
      <PagesAdminDashboardManageFinalEvaluation class="bg-light rounded-5 shadow p-3"
        v-else-if="urlToStringConverter(AppStore().activeContent.data.name) === 'evaluasi akhir'" />
      <pagesAdminDashboardManageApplicationContent class="bg-light rounded-5 shadow p-3" v-else-if="AppStore().activeContent.data.collection === 'application content'
          " />
      <pagesAdminDashboardManageLearningMaterials class="bg-light rounded-5 shadow p-3" v-else-if="AppStore().activeContent.data.collection === 'learning materials'
          " />
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

const resolveContent = ref(false)
const resolvingContent = () => {
  resolveContent.value = false
  AppStore().activeContent.data = { name: "", collection: null };
  AppStore().activeContent.data = {
    ...AppStore().activeContent.data,
    ...AppStore().appData.menu.find(
      (x: any) =>
        x.name === urlToStringConverter(String(route.params.selectedContent))
    ),
  };
  if (AppStore().appCacheData[`${AppStore().activeContent.data.name}`]) {
    setTimeout(() => {
      resolveContent.value = true
    }, 1000);
  } else {
    const count = ref(0)
    AppStore().appData.menu.forEach((x: any) => {
      AppDB.getContentDoc(
        x.collection,
        x.name
      ).then((x: any) => {
        count.value++
        AppStore().appCacheData[`${x.name}`] = {
          ...x,
          foundAt: useTimestamp().value,
          updatedAt: 0,
          updating: false,
          lastSelectedSubContent:
            x.subContent.length > 0 ? x.subContent[0].id : 0,
        };
        if (count.value === AppStore().appData.menu.length) {
          setTimeout(() => {
            resolveContent.value = true
          }, 1000);
        }
      });
    })
  }
}

resolvingContent();

useRouter().afterEach(async (to) => {
  resolvingContent();
});

const updateContentDoc = () => {
  AppStore().appCacheData[`${AppStore().activeContent.data.name}`].updating =
    true;
  const data: any = {
    name: AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
      .name,
    subContent:
      AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
        .subContent,
  };

  if (AppStore().activeContent.data.name === 'pembelajaran') {
    data.evaluation =
      AppStore().appCacheData[`${AppStore().activeContent.data.name}`].evaluation
  }

  if (AppStore().activeContent.data.name === 'evaluasi akhir') {
    data.data =
      AppStore().appCacheData[`${AppStore().activeContent.data.name}`].data
  }


  AppDB.updateContentDoc(
    AppStore().activeContent.data.collection,
    AppStore().activeContent.data.name,
    data
  )
    .then((x: any) => {
      if (x.status) {
        alert("perubahan disimpan");
        AppStore().appCacheData[
          `${AppStore().activeContent.data.name}`
        ].updatedAt = Number(useTimestamp().value);
        AppStore().appCacheData[
          `${AppStore().activeContent.data.name}`
        ].foundAt =
          AppStore().appCacheData[
            `${AppStore().activeContent.data.name}`
          ].updatedAt;
        AppStore().appCacheData[
          `${AppStore().activeContent.data.name}`
        ].updating = false;
      } else {
        AppStore().appCacheData[
          `${AppStore().activeContent.data.name}`
        ].updating = false;
        alert("perubahan gagal disimpan");
      }
    })
    .catch(() => {
      AppStore().appCacheData[
        `${AppStore().activeContent.data.name}`
      ].updating = false;
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
