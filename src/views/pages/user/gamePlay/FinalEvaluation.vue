<template>
    <div id="finalEvaluation">
        <div class="d-flex flex-column gap-4 w-100" v-if="ready">
            <div class="border-bottom border-secondary">
                <h1 class="h4 fw-bolder text-uppercase">
                    {{ urlToStringConverter(String(useRoute().params.playingContent)) }}
                </h1>
            </div>
            <div class="d-flex flex-column gap-4" v-if="UserStore().user.appData.finalEvaluation">
                <div class="border-bottom border-secondary">
                    <div class="p-3 bg-success text-light rounded-4 mb-4">
                        Evaluasi sudah dilaksanakan
                    </div>
                </div>
                <div class="d-flex flex-column gap-4">
                    <div class="col-12"
                        v-for="(question, i) in Object(AppStore().appCacheData[`${urlToStringConverter(String(useRoute().params.playingContent))}`]).data"
                        :key="i">
                        <div class="container">
                            <div class="d-flex flex-column gap-2">
                                <div class="d-flex fw-bolder gap-2">
                                    <div class="col-auto">
                                        <span class="">{{ i + 1 }}.</span>
                                    </div>
                                    <div class="col text-wrap">
                                        <div class="d-flex flex-column gap-2">
                                            <div class="col-12" v-if="Object(question).questionImage !== ''">
                                                <div class="col rounded-5 shadow overflow-hidden">
                                                    <img :src="Object(question).questionImage" alt="" class="img-fluid">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <span class="">{{ Object(question).question }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-4 ">
                                    <div class="d-flex flex-column gap-2">
                                        <div class="d-flex flex-column gap-2">
                                            <span class="text-capitalize">
                                                Jawaban terpilih :
                                            </span>
                                            <div :class="[
                                                'container bg-light border border-2 rounded py-2',
                                                Object(question).trueAnswer === Object(UserStore().user.appData.finalEvaluation)[`${Object(question).id}`] ? 'text-success border-success' : 'text-danger border-danger'
                                                ]"
                                            >
                                                <div class="d-flex gap-2">
                                                    <div class="col-auto">
                                                        <span class="text-uppercase">
                                                            {{ Object(UserStore().user.appData.finalEvaluation)[`${Object(question).id}`] }}.
                                                        </span>
                                                    </div>
                                                    <div class="col">
                                                        <span>
                                                            {{ Object(question).answerOption[`${Object(UserStore().user.appData.finalEvaluation)[`${Object(question).id}`]}`] }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column gap-2">
                                            <span class="text-capitalize">
                                                kunci jawaban :
                                            </span>
                                            <div class="container bg-light text-success border border-success border-2 rounded py-2">
                                                <div class="d-flex gap-2">
                                                    <div class="col-auto">
                                                        <span class="text-uppercase">
                                                            {{ Object(question).trueAnswer }}.
                                                        </span>
                                                    </div>
                                                    <div class="col">
                                                        <span>
                                                            {{ Object(question).answerOption[`${Object(question).trueAnswer}`] }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column gap-4" v-if="!UserStore().user.appData.finalEvaluation">
                <div class="col-12"
                    v-for="(question, i) in Object(AppStore().appCacheData[`${urlToStringConverter(String(useRoute().params.playingContent))}`]).data"
                    :key="i">
                    <div class="container">
                        <div class="d-flex flex-column gap-2">
                            <div class="d-flex fw-bolder gap-2">
                                <div class="col-auto">
                                    <span class="">{{ i + 1 }}.</span>
                                </div>
                                <div class="col text-wrap">
                                    <div class="d-flex flex-column">
                                        <div class="col-12">
                                            <div class="d-flex justify-content-center" v-if="Object(question).questionImage !== ''">
                                            <div class="col rounded-5 shadow overflow-hidden">
                                                <img :src="Object(question).questionImage" alt="" class="img-fluid">
                                            </div>
                                        </div>
                                        </div>
                                        <div class="col-12">
                                            <span class="">{{ Object(question).question }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ps-4">
                                <div class="form-check d-flex" v-for="(option, i) in Object(question).answerOption"
                                    :key="i">
                                    <div class="col-auto">
                                        <input class="form-check-input" type="radio" :name="Object(question).id"
                                            :id="`${i}${Object(question).id}`" :value="i"
                                            v-model="finalEvaluation[`${Object(question).id}`]" />
                                    </div>
                                    <div class="col">
                                        <label class="form-check-label" :for="`${i}${Object(question).id}`"> {{
                                            Object(option)
                                        }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <button class="footer-select-content button-style bg-primary text-light px-auto" @click="sendEvaluation()">
                        kirim jawaban
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const ready = ref(false)
const finalEvaluation: { [questionId: string]: string } | {} = reactive({
})

setTimeout(() => {
    setTimeout(() => {
        ready.value = true
    }, 500);
}, 500);


const sendEvaluation = () => {
    const question = Object(AppStore().appCacheData[`${urlToStringConverter(String(route.params.playingContent))}`]).data
    if (question.length > Object.keys(finalEvaluation).length) {
        alert("jawaban harus terisi semua")
    } else {
        UserStore().user.appData.finalEvaluation = {
            ...UserStore().user.appData.finalEvaluation,
            ...finalEvaluation
        }
        setTimeout(() => {
            AppDB.updateUserAppData().then((x: any) => {
                if (x.status === true) {
                    router.push('#finalEvaluation')
                    alert("evaluasi terkirim")
                } else {
                    alert("evaluasi gagal terkirim")
                }
            })
        }, 1000);
    }
}

</script>

<style scoped></style>