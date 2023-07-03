<template>
    <div class="image-uploader" @click="uploadImage">
        <div class="" v-if="props.image.source !== '' && source.html">
            <div class="" v-html="source.html.outerHTML" />
        </div>
        <div class="text-center" v-else>
            Tidak ada gambar
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    image: {
        name: string,
        source: string
    }
}>()

const emit = defineEmits<{
    (event: 'onImageSource', imageSource: Object): void
}>()

const source: { data?: any, html?: any } = reactive({})

if (props.image.source !== '') {
    const image = new Image()
    image.src = props.image.source
    source.data = props.image.source
    source.html = image
    source.html.className = 'img-fluid'

}

const uploadImage = () => {
    fileDialog({ accept: 'image/*' }).then((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file[0])
        reader.onload = () => {
            const image = new Image()
            // Base64 Data URL 👇
            image.src = String(reader.result)
            console.log(base64.validate(base64.fromString(image.src)))
            if (base64.validate(base64.fromString(image.src))) {
                AppStorage.uploadContentImage(`/final-evaluation/${props.image.name}`, reader.result).then((url) => {
                    image.src = url
                    source.data = reader.result
                    source.html = image
                    source.html.className = 'img-fluid'
                    emit('onImageSource', image.src)
                })
            }
            else {
                source.data = reader.result
                source.html = image
                source.html.className = 'img-fluid'
                emit('onImageSource', image.src)
            }
        };
    })
}
</script>

<style scoped lang="scss">
.image-uploader {
    min-height: 2rem;
    min-width: 2rem;
    border: 2px dotted var(--mdb-dark);
    border-radius: .5rem;
    padding: .5rem;
    cursor: pointer;
}
</style>