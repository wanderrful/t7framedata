export const _fn_parseFrameData = framedata => {
    let result = -1;
    const extracted = framedata.split(/[^\d+]/);
    if (!extracted.length) return result;
    for (let elem of extracted) {
        if (elem !== '') {
            result = parseInt(elem);
            break;
        };
    }
    return result;
}