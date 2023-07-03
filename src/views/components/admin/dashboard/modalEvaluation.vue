<template>
    <div class="evaluation-modal p-5">
        <div class="container h-100">
            <div class="position-relative d-flex flex-column gap-3 rounded-9 h-100 bg-light shadow p-5">
                <div class="close" @click="AppStore().modal.evaluasi = false">
                    <i class="fa-solid fa-xmark fa-3x text-danger" />
                </div>
                <div class="col-auto">
                    <h3 class="text-uppercase fw-bolder border-bottom border-secondary">
                        Evaluasi {{
                            Object(AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
                                .subContent)[
                                `${AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
                                    .lastSelectedSubContent}`
                            ].name }}
                    </h3>
                </div>
                <div class="d-flex flex-column gap-3 p-1" style="overflow: auto;">
                    <div v-for="(question, i) in AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
                            .evaluation[
                        `${AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
                            .lastSelectedSubContent}`
                        ]" :key="Number(i)">
                        <div class=" d-flex flex-column gap-3">
                            <div class="fw-bolder">
                                <span>{{ String(i + 1) }}. </span>
                                <input type="text" :value="String(Object(question).question)"
                                    @input="(event) => updateQuestion(i, Object(event).target.value)" />
                            </div>
                            <div class="px-4 d-flex flex-column gap-1">
                                <div class="d-flex gap-1" v-for="(option, alphabet) in Object(question).answerOption"
                                    :key="alphabet">
                                    <div class="col-auto">
                                        <span
                                            :class="['d-inline-block rounded px-2', String(Object(question).trueAnswer) === String(alphabet) ? 'bg-success text-light' : '']"
                                            style="width: 2rem; cursor: pointer;" @click="updateTrueAnswer(i, alphabet)">
                                            {{ alphabet }}.

                                        </span>
                                    </div>
                                    <div class="col">
                                        <input type="text" :value="option"
                                            @input="(event) => updateOptions(i, alphabet, Object(event).target.value)" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto" style="width: fit-content;">
                                <button class="button-style bg-danger small p-1 px-2" @click="deleteQuestion(i)">
                                    hapus pertanyaan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="add-evaluation button-style bg-primary text-light" style="height: auto;"
                    @click="addEvaluation()">
                    tambah evaluasi
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const addEvaluation = () => {
    AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
        .evaluation[
        `${AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
            .lastSelectedSubContent}`
    ].push({
        id: useTimestamp().value,
        question: "pertanyaan ?",
        answerOption: {
            a: "option a",
            b: "option b",
            c: "option c",
            d: "option d",
        },
        trueAnswer: "a"
    });
    AppStore().updatePageContent();
}

const updateQuestion = (i, question) => {
    AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
        .evaluation[
        `${AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
            .lastSelectedSubContent}`
    ][i].question = question
    AppStore().updatePageContent();
}

const updateTrueAnswer = (i, alphabet) => {
    AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
        .evaluation[
        `${AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
            .lastSelectedSubContent}`
    ][i].trueAnswer = alphabet
    AppStore().updatePageContent();
}

const updateOptions = (i, alphabet, data) => {
    AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
        .evaluation[
        `${AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
            .lastSelectedSubContent}`
    ][i].answerOption[`${alphabet}`] = data;

    AppStore().updatePageContent();
}

const deleteQuestion = (i) => {
    if (i > -1) {
        AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
            .evaluation[
            `${AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
                .lastSelectedSubContent}`
        ].splice(i, 1);
        AppStore().updatePageContent();
    }
}
</script>

<style scoped lang="scss">
.evaluation-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($color: #e0e0e0, $alpha: 0.8);
    z-index: 1000;

    .close {
        position: absolute;
        right: 1rem;
        top: 1rem;
        cursor: pointer;
    }
}
</style>