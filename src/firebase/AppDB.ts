import { User } from "firebase/auth";

export const AppDB = {
    getAppCollection: (appName: string) => {
        return new Promise<any>(async (resolve, reject) => {

            const appRef = collection(Firestore, appName);
            const appDocs = await getDocs(query(appRef, where("appName", "==", appName), limit(1)))
            if (!appDocs.empty) {
                let forEachCount = 0;
                const appDocsReturn = {}
                appDocs.forEach((appDoc) => {
                    forEachCount++;
                    appDocsReturn[`${appDoc.id}`] = appDoc.data()
                    AppStore().appData.appRef = `${appName}/${appDoc.id}`
                    if (forEachCount === appDocs.size) {
                        resolve(true)
                    }
                })
            }
            else {
                setTimeout(async () => {
                    // await setDoc(doc(appRef), { appName: appName, buildTime: serverTimestamp() })
                    reject(false)
                }, 3000);
            }
        })
    },

    getUserData: (email: string | null, user: User | null) => {
        return new Promise<{} | boolean>(async (resolve) => {

            const usersRef = collection(Firestore, String(AppStore().appData.appRef), "users");
            const userDoc = await getDocs(query(usersRef, where("email", "==", email), limit(1)))
            const userDocReturn = ref()

            if (!userDoc.empty) {
                userDoc.forEach((appDoc) => {
                    userDocReturn.value = { ...appDoc.data() }
                    userDocReturn.value.id = appDoc.id;
                    resolve(userDocReturn.value)
                })
            }
            else {

                setTimeout(async () => {
                    await setDoc(doc(usersRef), {
                        email: email,
                        registeredAt: Number(useTimestamp().value),
                        isTeacher: false,
                        data: {
                            ...user?.providerData[0],
                        },
                        appData: {
                            name: user?.providerData[0].displayName
                        },
                        status: "nonactive",
                    }).then(() => {
                        AppDB.getUserData(email, user)
                    })
                }, 3000);
            }
        })
    },

    registerUser: () => {
        return new Promise<{} | boolean>(async (resolve) => {
            const userDoc = doc(Firestore, String(AppStore().appData.appRef), `users/${UserStore().user.id}`);
            UserStore().user.appData.evaluation = {}
            const data = {
                appData: UserStore().user.appData,
                status: "active"
            }
            const documentResult: any = await updateDoc(userDoc, data)
            resolve({ status: true, reason: documentResult })
        })
    },

    updateUserAppData: () => {
        return new Promise<{} | boolean>(async (resolve) => {
            const userDoc = doc(Firestore, String(AppStore().appData.appRef), `users/${UserStore().user.id}`);
            const data = {
                appData: UserStore().user.appData,
            }
            const documentResult: any = await updateDoc(userDoc, data)
            resolve({ status: true, reason: documentResult })
        })
    },

    getAllStudentData: () => {
        return new Promise<{} | boolean>(async (resolve, reject) => {

            const usersRef = collection(Firestore, String(AppStore().appData.appRef), "users");
            const userDoc = await getDocs(query(usersRef, where("isTeacher", "==", false)))
            AppStore().allStudent.isGettingData = true
            setTimeout(() => {
                if (!userDoc.empty) {
                    let allSiswaDataReturn: {}[] = []
                    userDoc.forEach((appDoc) => {
                        allSiswaDataReturn.push(appDoc.data())
                        if (Object.keys(allSiswaDataReturn).length === userDoc.size) {
                            AppStore().allStudent.data = allSiswaDataReturn
                            resolve(allSiswaDataReturn)
                            AppStore().allStudent.isGettingData = false
                            AppStore().allStudent.lastGettingData = useTimestamp().value
                        }
                    })
                }
                else {
                    reject(false)
                    AppStore().allStudent.isGettingData = false
                    AppStore().allStudent.lastGettingData = useTimestamp().value
                }
            }, 3000)
        })
    },

    getContentDoc: (collationRef: string, document: string) => {
        return new Promise<{} | boolean>(async (resolve, reject) => {
            const documentRef = doc(Firestore, String(`${AppStore().appData.appRef}/${collationRef}`), document);
            const documentResult = await getDoc(documentRef)
            if (documentResult.exists()) {
                resolve(documentResult.data())
            }
            else {
                const data = {
                    name: document,
                    subContent: {}
                }
                setDoc(documentRef, data);
                setTimeout(() => {
                    AppDB.getContentDoc(collationRef, document).then(() => { })
                    reject(false)
                }, 3000)
            }
        })
    },

    updateContentDoc: (collationRef: string, document: string, data: any) => {
        return new Promise<{} | boolean>(async (resolve) => {
            const documentRef = doc(Firestore, String(`${AppStore().appData.appRef}/${collationRef}`), document);
            const documentResult: any = await updateDoc(documentRef, data)
            resolve({ status: true, reason: documentResult })
        })
    },

}
