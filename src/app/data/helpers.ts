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

export const _fn_parseHitData = framedata => {
    const extracted = framedata.split(/~/);
    if (framedata.length === 0 || extracted.length === 0) {
        return 0;
    }
    const parsed = parseInt(extracted[0]);
    return !!parsed ? parsed : 0;
}