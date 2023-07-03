import ImageUploader from 'quill-image-uploader';


const quillOptions = {
    // debug: "info",
    modules: {
        syntax: true,
    },
    theme: "snow",
};

const quillToolbars = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ size: ["small", false, "large", "huge"] }],

    [{ font: [] }],

    ["bold", "italic", "underline", "strike"], // toggled buttons

    [{ align: [] }],

    [{ list: "ordered" }, { list: "bullet" }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme

    [{ script: "sub" }, { script: "super" }], // superscript/subscript

    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

    [{ direction: "rtl" }], // text direction

    ["link", "blockquote", "image", "video", "code-block"],

    ["clean"],
]

const quillModules = [
    {
        name: 'imageUploader',
        module: ImageUploader,
        options: {
            upload: (image: any) => {

                return new Promise((resolve, reject) => {
                    const fileReader = new FileReader()
                    fileReader.readAsDataURL(image)
                    fileReader.onload = () => {
                        console.log(fileReader.result);
                        AppStorage.uploadContentImage(image.name, fileReader.result).then((result) => {
                            resolve(result)
                        }).catch((err: any) => {
                            alert('upload gagal'),
                                reject(err)
                        });
                    }
                })
            }
        }
    }
]

export { quillOptions, quillModules, quillToolbars }