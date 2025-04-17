<template>
  <div>
    <QuillEditor
      ref="quill"
      :toolbar="quillToolbars"
      :modules="quillModules"
      v-model:content="quillContent.delta"
      @update:content="updatePageContent()"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  quillContent?: any;
}>();

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

const quill = ref();

const updatePageContent = () => {
  content.value.data.ops = quill.value.getContents().ops;
  appStore.updatePageContent();
};
</script>

<style lang="scss">
.ql-editor {
  overflow-y: auto;
  height: 70vh;
}
</style>
