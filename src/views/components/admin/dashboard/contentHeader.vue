<template>
  <div class="content-header">
    <div class="container-fluid">
      <div class="row align-items-end gap-3">
        <div class="col-auto">
          <span class="small px-2"
            >sub konten
            {{
              appStore.appCacheData[`${appStore.activeContent.data.name}`]
                .lastSelectedSubContent
            }}</span
          >
          <div>
            <select
              id="selcet-sub-content"
              class="input-style"
              v-model="
                // appStore.activeContent.data.subContentActive
                appStore.appCacheData[`${appStore.activeContent.data.name}`]
                  .lastSelectedSubContent
              "
            >
              <option
                v-for="(sub, i) in appStore.appCacheData[
                  `${appStore.activeContent.data.name}`
                ].subContent"
                :key="i"
                :value="i"
              >
                {{ Object(sub).name }}
              </option>
              <option
                v-if="
                  Object(
                    appStore.appCacheData[`${appStore.activeContent.data.name}`]
                      .subContent
                  ).length === 0
                "
                value=""
                selected
                disabled
              >
                tidak ada sub-konten {{ appStore.activeContent.data.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-auto">
          <div class="row gap-3">
            <div
              class="col-auto"
              v-if="appStore.newContentData['sub content'].focus"
            >
              <input
                type="text"
                class="input-style"
                id="labelAddPage"
                v-model="appStore.newContentData['sub content'].name"
                @blur="appStore.newContentData.blur('sub content', 10000)"
              />
            </div>
            <div class="col-auto">
              <label
                class="btn-link button-style bg-primary text-light p-1 px-3"
                for="labelAddPage"
                @click="appStore.newContentData.submit('sub content')"
              >
                tambah sub konten
              </label>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <div class="row gap-3">
            <div class="col-auto">
              <label
                class="btn-link button-style bg-danger text-light p-1 px-3"
                for="labelAddPage"
                @click="deleteSubContent()"
              >
                hapus sub konten
              </label>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <div class="row gap-3">
            <div class="col-auto" v-if="appStore.newContentData.page.focus">
              <input
                type="text"
                class="input-style"
                id="labelAddPage"
                v-model="appStore.newContentData.page.name"
                @blur="appStore.newContentData.blur('page', 10000)"
              />
            </div>
            <div class="col-auto">
              <label
                class="btn-link button-style bg-warning text-light p-1 px-3"
                for="labelAddPage"
                @click="appStore.newContentData.submit('page')"
              >
                tambah halaman
              </label>
            </div>
          </div>
        </div>
        <div
          class="col-auto"
          v-if="
            appStore.activeContent.data.name === 'pembelajaran' &&
            appStore.appCacheData[`${appStore.activeContent.data.name}`]
              .lastSelectedSubContent
          "
        >
          <div class="row gap-3">
            <div class="col-auto">
              <label
                class="btn-link button-style bg-secondary p-1 px-3"
                for="labelAddPage"
                @click="appStore.modal.evaluasi = true"
              >
                evaluasi
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ComponentsAdminDashboardModalEvaluation v-if="appStore.modal.evaluasi" />
  </div>
</template>

<script setup lang="ts">
const appStore = AppStore();

const deleteSubContent = () => {
  if (
    appStore.appCacheData[`${appStore.activeContent.data.name}`]
      .lastSelectedSubContent
  ) {
    const confirmDeleteSubcontent = confirm(
      `yakin akan menghapus sub konten ${
        Object(
          appStore.appCacheData[`${appStore.activeContent.data.name}`]
            .subContent
        )[
          `${
            appStore.appCacheData[`${appStore.activeContent.data.name}`]
              .lastSelectedSubContent
          }`
        ].name
      }`
    );
    if (confirmDeleteSubcontent) {
      appStore.deleteSubContent(
        String(
          appStore.appCacheData[`${appStore.activeContent.data.name}`]
            .lastSelectedSubContent
        )
      );
    }
  }
};

appStore.modal.evaluasi = false;
</script>

<style scoped lang="scss">
.content-header {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
}
</style>
