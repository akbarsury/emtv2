<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row align-items-end gap-3">
                <div class="col-auto">
                    <span class="small px-2">sub konten
                        {{
                            AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
                                .lastSelectedSubContent
                        }}</span>
                    <div>
                        <select id="selcet-sub-content" class="input-style" v-model="
                                // AppStore().activeContent.data.subContentActive
                                AppStore().appCacheData[
                                    `${AppStore().activeContent.data.name}`
                                ].lastSelectedSubContent
                                ">
                            <option v-for="(sub, i) in AppStore().appCacheData[
                                `${AppStore().activeContent.data.name}`
                            ].subContent" :key="i" :value="i">
                                {{ Object(sub).name }}
                            </option>
                            <option v-if="Object(AppStore().appCacheData[
                                    `${AppStore().activeContent.data.name}`
                                ].subContent).length === 0
                                " value="" selected disabled>
                                tidak ada sub-konten {{ AppStore().activeContent.data.name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="row gap-3">
                        <div class="col-auto" v-if="AppStore().newContentData['sub content'].focus">
                            <input type="text" class="input-style" id="labelAddPage"
                                v-model="AppStore().newContentData['sub content'].name"
                                @blur="AppStore().newContentData.blur('sub content', 10000)" />
                        </div>
                        <div class="col-auto">
                            <label class="btn-link button-style bg-primary text-light p-1 px-3" for="labelAddPage"
                                @click="AppStore().newContentData.submit('sub content')">
                                tambah sub konten
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="row gap-3">
                        <div class="col-auto">
                            <label class="btn-link button-style bg-danger text-light p-1 px-3" for="labelAddPage"
                                @click="deleteSubContent()">
                                hapus sub konten
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="row gap-3">
                        <div class="col-auto" v-if="AppStore().newContentData.page.focus">
                            <input type="text" class="input-style" id="labelAddPage"
                                v-model="AppStore().newContentData.page.name"
                                @blur="AppStore().newContentData.blur('page', 10000)" />
                        </div>
                        <div class="col-auto">
                            <label class="btn-link button-style bg-warning text-light p-1 px-3" for="labelAddPage"
                                @click="AppStore().newContentData.submit('page')">
                                tambah halaman
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-auto" v-if="AppStore().activeContent.data.name === 'pembelajaran' &&
                    AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
                        .lastSelectedSubContent
                    ">
                    <div class="row gap-3">
                        <div class="col-auto">
                            <label class="btn-link button-style bg-secondary  p-1 px-3" for="labelAddPage"
                                @click="AppStore().modal.evaluasi = true">
                                evaluasi
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ComponentsAdminDashboardModalEvaluation v-if="AppStore().modal.evaluasi" />
    </div>
</template>

<script setup lang="ts">

const deleteSubContent = () => {
    if (
        AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
            .lastSelectedSubContent
    ) {
        const confirmDeleteSubcontent = confirm(
            `yakin akan menghapus sub konten ${Object(AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
                .subContent)[
                `${AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
                    .lastSelectedSubContent
                }`
            ].name
            }`
        );
        if (confirmDeleteSubcontent) {
            AppStore().deleteSubContent(
                String(
                    AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
                        .lastSelectedSubContent
                )
            );
        }
    }
};

AppStore().modal.evaluasi = false
</script>

<style scoped lang="scss">
.content-header {
    position: sticky;
    position: -webkit-sticky;
    top: 0px;
}
</style>