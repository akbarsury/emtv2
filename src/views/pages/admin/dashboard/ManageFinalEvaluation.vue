<template>
    <div>
        <div class="d-flex flex-column gap-3 p-1" style="overflow: auto;"
            v-if="AppStore().appCacheData[`${AppStore().activeContent.data.name}`].data">
            <div class="question-wrapper" v-if="AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
                    .data.length > 0">
                <div class="question py-4" v-for="(question, i) in AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
                        .data" :key="Number(i)">
                    <div class=" d-flex flex-column gap-3">
                        <div class="d-flex justify-content-center">
                            <div class="col-12 col-md-6">
                                <ComponentsImageUploader @onImageSource="(e) => { Object(question).questionImage = e }"
                                    :image="{ name: Object(question).id, source: Object(question).questionImage }" />
                            </div>
                        </div>
                        <div class="fw-bolder">
                            <div class="d-flex gap-2">
                                <div class="col-auto">
                                    <span>{{ String(i + 1) }}. </span>
                                </div>
                                <div class="col">
                                    <input class="w-100" type="text" :value="String(Object(question).question)"
                                        @input="(event) => updateQuestion(i, Object(event).target.value)" />
                                </div>
                            </div>
                        </div>
                        <div class="px-4 d-flex flex-column gap-1">
                            <div class="d-flex gap-2" v-for="(option, alphabet) in Object(question).answerOption"
                                :key="alphabet">
                                <div class="col-auto">
                                    <span
                                        :class="['d-inline-block rounded px-2', String(Object(question).trueAnswer) === String(alphabet) ? 'bg-success text-light' : '']"
                                        style="width: 2rem; cursor: pointer;"
                                        @click="updateTrueAnswer(i, String(alphabet))">
                                        {{ alphabet }}.

                                    </span>
                                </div>
                                <div class="col">
                                    <input class="w-100" type="text" :value="option"
                                        @input="(event) => updateOptions(i, String(alphabet), Object(event).target.value)" />
                                </div>
                            </div>
                        </div>
                        <div class="col-auto" style="width: fit-content;">
                            <div class="d-flex gap-4">
                                <button class="col-auto button-style bg-danger small p-1 px-2" style="width: fit-content;"
                                    @click="deleteQuestion(i)">
                                    hapus pertanyaan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="p-3 bg-warning text-center border border-2 border-dark rounded">
                    tidak ada instrumen evaluasi
                </div>
            </div>
            <div>
                <button class="add-evaluation button-style bg-primary text-light" style="height: auto;"
                    @click="addEvaluation()">
                    tambah evaluasi
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const addEvaluation = () => {
    AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
        .data.push({
            id: useTimestamp().value,
            question: "pertanyaan ?",
            questionImage: "",
            answerOption: {
                a: "option a",
                b: "option b",
                c: "option c",
                d: "option d",
            },
            trueAnswer: "a"
        });
    // AppStore().updatePageContent();
}

const updateQuestion = (i: number, question: string) => {
    AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
        .data[i].question = question
    // AppStore().updatePageContent();
}

const updateTrueAnswer = (i: number, alphabet: string) => {
    AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
        .data[i].trueAnswer = alphabet
    // AppStore().updatePageContent();
}

const updateOptions = (i: number, alphabet: string, data: object) => {
    AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
        .data[i].answerOption[`${alphabet}`] = data;

    // AppStore().updatePageContent();
}

const deleteQuestion = (i: number) => {
    if (i > -1) {
        AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
            .data.splice(i, 1);
        // AppStore().updatePageContent();
    }
}

watch(AppStore().appCacheData[`${AppStore().activeContent.data.name}`]
    .data, () => {
        AppStore().updatePageContent();
    })
</script>

<style scoped lang="scss">
.question-wrapper {
    .question {
        border-bottom: 2px dotted var(--mdb-dark);
    }
}
</style>