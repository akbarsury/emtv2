
export const appAuth = {
    tryToAuthenticationUser: () => {
        return new Promise(async (resolve: (value: { success: boolean, user?: any | null, userCred?: any | null, error?: {} }) => any) => {
            setPersistence(Authentication, browserSessionPersistence).then(async () => {
                const googleAuth = new GoogleAuthProvider();
                try {
                    const result = await signInWithPopup(Authentication, googleAuth)
                    const user = result.user.providerData;
                    resolve({ success: user ? true : false, user })
                } catch (error: any) {
                    resolve({ success: error ? false : true, user: null })
                }
            })
        })
    },

    // userTryToSignOut: () => {
    //     return new Promise((resolve) => {
    //         signOut(Authentication).then(() => {
    //             // Sign-out successful.
    //             globalStore().userData.accountStatus = null;
    //             globalStore().userData.userAppData = null;
    //             globalStore().userData.data = null;
    //             resolve(true)
    //         }).catch(() => {
    //             resolve(false)
    //         });
    //     })
    // },

}