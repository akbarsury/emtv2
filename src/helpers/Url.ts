export const urlToStringConverter = (url: string) => {
    return url.replace("+", " ");
};

export const stringToUrlConverter = (string: string) => {
    return string.replace(" ", "+");
};