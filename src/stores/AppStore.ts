export type _Content = {
    name?: String
    subContent?: {
        [id: string]: {
            name: string,
            page?: {
                [id: string]: {
                    name: string,
                    type: string,
                    data?: {}
                }
            }[]
        }
    }[]
    evaluation: object,
    data: any[],
    lastSelectedSubContent: Number,
    foundAt: Number,
    updatedAt: Number,
    updating: boolean,
};

export type _AppChacheContent = {
    [name: string]: _Content
}


const appStore = createGlobalState(() => {
    const splashScreenStatus = ref(true)

    const loadedApp = ref(false);
    const loadApp = async (appName: string) => {
        return new Promise<any>(async (resolve) => {
            AppDB.getAppCollection(appName)
                .then(() => {
                    loadedApp.value = true;
                    resolve(loadedApp.value)
                })
                .catch(() => {
                    setTimeout(() => {
                        loadApp(appName)
                    }, 3000)
                });
        })
    }

    const appData: {
        appRef?: string,
        menu: {
            name?: string,
            collection?: string | null
        }[],
        subContentActive: object,
        sidebarOpened: boolean,
        error: { admin: any }
    } = reactive({
        menu: [
            { name: "overview", collection: null },
            { name: "siswa", collection: "users" },
            { name: "kata pengantar", collection: "application content" },
            { name: "petunjuk penggunaan", collection: "application content" },
            { name: "kompetensi", collection: "application content" },
            { name: "tujuan pembelajaran", collection: "application content" },
            { name: "pembelajaran", collection: "learning materials" },
            { name: "evaluasi akhir", collection: "learning materials" },
            // { name: "rangkuman", collection: "learning materials" },
            { name: "daftar pustaka", collection: "application content" },
            { name: "biografi pengembang", collection: "application content" },
        ],
        subContentActive: {},
        sidebarOpened: true,
        error: {
            admin: {
                status: false,
                message: ""
            }
        }
    })

    const modal: any = reactive({})

    const allStudent: {
        isGettingData: boolean,
        lastGettingData: number,
        data: {}[]
    } = reactive({
        isGettingData: false,
        lastGettingData: 0,
        data: []
    })

    const tryToLogin = () => {
        UserStore().userStatus.tryToAuthenticated = true;
        appAuth.tryToAuthenticationUser().then((x: any) => {
            if (x.success === true) {
                true
            }
        });
    };

    const saveChanged: { status: false, action: () => void } = reactive({
        status: false,
        action: () => { },
        excution: () => {
            saveChanged.action(), saveChanged.status = false
        }
    })

    const activeContent: { data: any } = reactive({
        data: {}
    })

    const appCacheData: _AppChacheContent
        = reactive({
            // 'defaultContent': {
            //     name: "default-content",
            //     subContent: {
            //         id: 0,
            //         name: "default-subcontent",
            //         page:
            //             [{
            //                 name: "default-page",
            //                 id: 0,
            //                 type: "delta",
            //                 data: { ops: [{ insert: "default halaman" }] }
            //             }],
            //     },
            //     lastSelectedSubContent: 0,
            //     foundAt: 0,
            //     updatedAt: 0
            // }
        })

    const addSubContent = () => {
        const newSubcontentName: string = String(prompt("Nama sub-konten baru :"))
        alert(newSubcontentName)

    }

    const newContentData = new class {
        /// params
        // 'sub content',
        // 'page'

        "new subcontent" = {
            name: "",
            focus: false,
        }
        "new page" = {
            name: "",
            focus: false,
        }
        "sub content" = reactive(this['new subcontent'])
        "page" = reactive(this['new page'])
        submit = (type: string) => {
            return new Promise<{ success: boolean, error?: string }>((resolve, reject) => {
                if (this[`${type}`].focus) {
                    /// update
                    if (this[`${type}`].name !== "") {
                        if (type === 'sub content') {
                            const id = useTimestamp().value
                            Object(appCacheData[`${activeContent.data.name}`]).subContent =
                            {
                                ...appCacheData[`${activeContent.data.name}`].subContent,
                                [`${id}`]: {
                                    name: this[`${type}`].name,
                                    page: [],
                                }
                            }
                            ///evaluasi pembelajaran
                            if (activeContent.data.name === 'pembelajaran') {
                                appCacheData[`${activeContent.data.name}`].evaluation =
                                {
                                    ...appCacheData[`${activeContent.data.name}`].evaluation,
                                    [`${id}`]: []
                                }
                            }
                            this.blur(type, 0)
                            resolve({ success: true })
                        }
                        else if (type === 'page') {
                            if (appCacheData[`${activeContent.data.name}`].lastSelectedSubContent === 0) {
                                alert("pilih sub konten terlebih dahulu")
                            } else {
                                Object(appCacheData[`${activeContent.data.name}`]).subContent[
                                    `${appCacheData[`${activeContent.data.name}`].lastSelectedSubContent}`
                                ].page.push({
                                    [`${useTimestamp().value}`]: {
                                        name: this[`${type}`].name,
                                        type: 'delta',
                                        data: {
                                            ops: [{
                                                "insert": "halaman baru"
                                            }]
                                        }
                                    }
                                })
                                this.blur(type, 0)
                                resolve({ success: true })
                            }
                        }
                        appCacheData[
                            `${activeContent.data.name}`
                        ].updatedAt = useTimestamp().value

                    }
                    /// nama tidak diisi
                    else {
                        reject({ succes: false, error: `nama ${type} tidak boleh kosong` })
                    }
                } else {
                    /// tampilkan input
                    this[`${type}`].focus = true
                }
            })
        }
        blur = (type: string, timeout: Number) => {
            setTimeout(() => {
                this[`${type}`].name = ""
                this[`${type}`].focus = false
            }, Number(timeout))
        }
    }

    const deleteSubContent = (id: string) => {
        return new Promise<any>((resolve) => {
            delete Object(appCacheData[`${activeContent.data.name}`].subContent)[
                `${id}`
            ]
            if (activeContent.data.name === 'pembelajaran') {
                delete appCacheData[`${activeContent.data.name}`].evaluation[
                    `${id}`]
            }
            appCacheData[
                `${activeContent.data.name}`
            ].updatedAt = useTimestamp().value
            resolve(true)
        })
    }

    const deletePage = (index: number) => {
        return new Promise<any>((resolve) => {
            if (index > -1) { // only splice array when item is found
                Object(appCacheData[`${activeContent.data.name}`].subContent)[
                    `${appCacheData[`${activeContent.data.name}`].lastSelectedSubContent}`
                ].page.splice(index, 1); // 2nd parameter means remove one item only
            }
            appCacheData[
                `${activeContent.data.name}`
            ].updatedAt = useTimestamp().value
            resolve(true)
        })
    }

    const updatePageContent = () => {
        return new Promise<any>((resolve) => {
            appCacheData[
                `${activeContent.data.name}`
            ].updatedAt = useTimestamp().value
            resolve(true)
        })
    }

    const quilToHTML = (deltaObject: { ops: [{}] }) => {
        return new QuillDeltaToHtmlConverter(
            deltaObject.ops
        )
    }

    return {
        splashScreenStatus,
        loadedApp,
        loadApp,
        appData,
        modal,
        allStudent,

        tryToLogin,

        saveChanged,
        activeContent,
        appCacheData,
        addSubContent,
        newContentData,
        deleteSubContent,
        deletePage,
        updatePageContent,

        quilToHTML
    }
})

export default appStore