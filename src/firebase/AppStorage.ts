
export const AppStorage = {
    uploadContentImage: (name: string, data: any) => {
        return new Promise<any>((resolve, reject) => {
            // Create a child reference
            const contentImagesRef = sref(storage(), `images/content/${name}.png`);
            // imagesRef now points to 'images'
            uploadString(contentImagesRef, data, 'data_url').then(async () => {
                const url: any = await getDownloadURL(
                    sref(storage(), `images/content/${name}.png`)
                );
                resolve(url);
            }).catch(() => reject(false))
        })
    }
}
