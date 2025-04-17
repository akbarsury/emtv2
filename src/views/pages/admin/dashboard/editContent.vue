<template>
  <div
    class="d-flex flex-column gap-4 p-4"
    v-if="appStore.activeContent.data.name"
  >
    <div class="container-fluid border-secondary border-bottom py-2">
      <div class="row align-items-center gap-2">
        <div class="col-auto p-1">
          <div class="text-uppercase small">
            <span class="badge badge-primary">
              <u> konten </u>
            </span>
          </div>
          <span class="text-uppercase badge badge-secondary">
            {{ appStore.activeContent.data.name }}
          </span>
        </div>
        <div class="col-auto p-1">
          <div class="text-uppercase small">
            <span class="badge badge-primary">
              <u> subkonten </u>
            </span>
          </div>
          <span class="text-uppercase badge badge-secondary">
            {{ content.name }}
          </span>
        </div>
        <div class="col-auto p-1">
          <div class="text-uppercase small">
            <span class="badge badge-primary">
              <u> halaman </u>
            </span>
          </div>
          <span class="text-uppercase badge badge-secondary">
            {{
              `${Number(useRoute().query.page)} - ` +
              Object(
                Object.values(
                  Object(
                    Object.entries(
                      Object(
                        appStore.appCacheData[
                          `${appStore.activeContent.data.name}`
                        ].subContent
                      )[
                        `${
                          appStore.appCacheData[
                            `${appStore.activeContent.data.name}`
                          ].lastSelectedSubContent
                        }`
                      ].page
                    )[Number(useRoute().query.page) - 1][1]
                  )
                )[0]
              ).name
            }}
          </span>
        </div>
        <div class="col-auto p-1">
          <div class="text-uppercase small">
            <span class="badge badge-primary">
              <u> status </u>
            </span>
          </div>
          <span class="text-uppercase badge badge-secondary">
            {{ !quillContent.updated ? "tidak diperbarui" : "diperbarui" }}
          </span>
        </div>
      </div>
    </div>
    <div class="editor-content d-flex justify-content-center">
      <div class="editor-wrapper col-12 col-md-10 col-lg-8 bg-light rounded-5">
        <components-quill-editor :quillContent="quillContent" />
      </div>
    </div>
  </div>
  <div class="p-4" v-else>
    <span class="loader" />
  </div>
</template>

<script setup lang="ts">
const appStore = AppStore();

const content = ref(
  Object(
    Object.values(
      Object(
        Object.entries(
          Object(
            appStore.appCacheData[`${appStore.activeContent.data.name}`]
              .subContent
          )[
            `${
              appStore.appCacheData[`${appStore.activeContent.data.name}`]
                .lastSelectedSubContent
            }`
          ].page
        )[Number(useRoute().query.page) - 1][1]
      )
    )[0]
  )
);

const quillContent = reactive({
  updating: false,
  updated: false,
  html: "<div> </div>",
  delta: new Delta(content.value.data),
});
</script>

<style scoped lang="scss">
.editor-content {
  position: relative;
  min-height: 75vh;
  display: flex;

  .editor-wrapper {
    position: relative;
    // overflow-y: auto;
    top: 0px;
    bottom: 0px;
  }
}

.loader {
  border-color: #808080;

  &.update {
    border-color: #ffffff;
  }
}
</style>
