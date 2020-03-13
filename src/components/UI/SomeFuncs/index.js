export const cutText = (text, num) => {
    let newText = "";
    if (text.length > num) {
        newText = text.substr(0, num) + "...";
    } else {
        newText = text;
    }
    return newText;
};