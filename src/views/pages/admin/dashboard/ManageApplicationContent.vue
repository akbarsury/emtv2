<template>
  <div class="d-flex">
    <div
      class="col-12 table-wrapper"
      v-if="
        appStore.appCacheData[`${appStore.activeContent.data.name}`] &&
        Object.keys(route.query).length <= 0
      "
    >
      <div
        class="container-fluid"
        v-if="
          Object(
            appStore.appCacheData[`${appStore.activeContent.data.name}`]
              .subContent
          )[
            `${
              appStore.appCacheData[`${appStore.activeContent.data.name}`]
                .lastSelectedSubContent
            }`
          ]
        "
      >
        <table
          class="aplication-content-table table table-bordered table-hover table-sm border-secondary rounded-5"
        >
          <thead>
            <tr class="table-primary text-center text-capitalize text-nowrap">
              <th class="fw-bolder" scope="col">nomor Halaman</th>
              <th class="fw-bolder" scope="col">nama halaman</th>
              <th class="fw-bolder" scope="col">aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-lowercase text-nowrap"
              v-for="(page, index) in Object(
                appStore.appCacheData[`${appStore.activeContent.data.name}`]
                  .subContent
              )[
                `${
                  appStore.appCacheData[`${appStore.activeContent.data.name}`]
                    .lastSelectedSubContent
                }`
              ].page"
              :key="index"
            >
              <th class="text-center" scope="row">
                {{ Number(index) + 1 }}
              </th>
              <td>{{ Object(Object.entries(Object(page))[0][1]).name }}</td>
              <td>
                <div class="container">
                  <div class="row align-items-center gap-3">
                    <!-- <button
                      class="col-auto button-style small bg-secondary"
                      style="width: fit-content"
                    >
                      edit nama halaman
                    </button> -->
                    <button
                      class="col-auto button-style small bg-secondary"
                      style="width: fit-content"
                      @click="
                        editPage({
                          pageNumber: Number(index) + 1,
                          id: Object.entries(Object(page))[0][0],
                          ...Object(Object.entries(Object(page))[0][1]),
                        })
                      "
                    >
                      edit halaman
                    </button>
                    <button
                      class="col-auto button-style small bg-danger text-light"
                      style="width: fit-content"
                      @click="
                        deletePage(
                          Number(index),
                          Object(Object.entries(Object(page))[0][1]).name
                        )
                      "
                    >
                      hapus
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr
              v-if="
                Object(
                  appStore.appCacheData[`${appStore.activeContent.data.name}`]
                    .subContent
                )[
                  `${
                    appStore.appCacheData[`${appStore.activeContent.data.name}`]
                      .lastSelectedSubContent
                  }`
                ].page.length <= 0
              "
            >
              <td
                class="text-center text-danger fw-bolder"
                scope="row"
                colspan="5"
              >
                Tidak ada halaman
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container-fluid" v-else>
        <span class="d-block bg-danger text-center text-light rounded-4 p-2"
          >tidak ada sub konten dipilih</span
        >
      </div>
    </div>
    <router-view v-else />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();

const appStore = AppStore();

const editPage = (pageData: any) => {
  if (pageData.type === "delta") {
    router.push({
      name: "dashboard-edit-content",
      query: {
        sub: String(
          appStore.appCacheData[`${appStore.activeContent.data.name}`]
            .lastSelectedSubContent
        ),
        page: pageData.pageNumber,
      },
    });
  }
};
const deletePage = (id: number, title: string) => {
  const confirmDeletePage = confirm(`Yakin menghapus halaman ${title}?`);
  if (confirmDeletePage) {
    appStore.deletePage(id);
  }
};
</script>

<style scoped lang="scss">
.table-wrapper {
  overflow: auto;
}
</style>
