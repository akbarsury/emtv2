import { User } from "firebase/auth"

export type _UserData = {
    name?: string
    class?: string
    rollNumber?: number

}

const UserStore = createGlobalState(() => {
    const userStatus = reactive({
        isAuthenticated: false,
        tryToAuthenticated: false,
    })

    const user: {
        status?: string,
        data?: User,
        appData: {
            name?: string,
            class?: string,
            ruleNumber?: string,
            evaluation?: {
                [learningId: string]: { [questionId: string]: string } | {}
            },
            finalEvaluation?: { [questionId: string]: string } | {}
        },
        email?: string,
        registeredAt?: number,
        isTeacher?: boolean,
        id?: string | null
    }
        = reactive({
            isTeacher: false,
            id: null,
            appData: {
                name: "",
                class: "",
                ruleNumber: "",
            },
            evaluation: {}
        })

    const registerUser = () => {
        return new Promise<any>((resolve) => {
            if (
                UserStore().user.appData.name &&
                UserStore().user.appData.class &&
                UserStore().user.appData.ruleNumber
            ) {
                UserStore().userStatus.tryToAuthenticated = true
                setTimeout(() => {
                    AppDB.registerUser().then(() => {
                        UserStore().userStatus.tryToAuthenticated = false
                        UserStore().user.status = "active"
                        setTimeout(() => {
                            resolve(true)
                        }, 3000);
                    })
                }, 3000);
            } else {
                alert("data tidak boleh kosong")
            }
        })
    }

    return { userStatus, user, registerUser }
})

export default UserStore;