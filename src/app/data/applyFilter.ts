import { CharacterFrameData } from './framedata.interface';

const _fn_escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const fn_applyFilter = (defaultFn: Function): ((data: CharacterFrameData, filter: string) => boolean) => {
    return (
        (data: CharacterFrameData, filter: string) => {
            // Filter out the special, passive params
            let specialParams = [];
            let normalParams = '';
            const tokenizedFilter = filter.split(" ");
            tokenizedFilter.forEach(t => {
                if (!!t.match(/\?.*\?/)) {
                    specialParams.push(t);
                } else {
                    normalParams += t;
                }
            });

            let basicSearchResult = defaultFn(data, normalParams);

            while (!!specialParams.length) {
                const current = specialParams.shift();
                switch (current) {
                    case "?specialCounterHitStatus?": {
                        const locatedSpecialCounterHitStatus = data.counterHitFrames.match(/[a-zA-Z]/);
                        basicSearchResult = basicSearchResult && !!locatedSpecialCounterHitStatus && !!locatedSpecialCounterHitStatus.length;
                        break;
                    }
                    case "?whiffPunisher?": {
                        let result = -1;
                        const extracted = data.startupFrames.split(/[^\d+]/);
                        if (!extracted.length) return false;
                        for (let elem of extracted) {
                            if (elem !== '') {
                                result = parseInt(elem);
                                break;
                            };
                        }
                        basicSearchResult = basicSearchResult && result > 0 && result < 14;
                    }
                    default: {
                        break;
                    }
                }
            }
            return basicSearchResult;
        }
    );
};

// export const fn_applyFilter = (data: CharacterFrameData, filter: string) => {
//     console.log(filter);

//     let basicSearchResult = false;
//     let specialParams = [];
//     let searchParams = [];
//     const formattedData = Object.values(data).join(" ");

//     // Break up the search params into tokens
//     const tokenizedFilter = filter.split(" ");
//     tokenizedFilter.forEach(t => {
//         if (!!t.match(/\?.*\?/)) {
//             specialParams.push(t);
//         } else {
//             searchParams.push(t);
//         }
//     });

//     // Search the data for the non-special tokens
//     if (!searchParams.length) {
//         basicSearchResult = true;
//     } else {
//         for (let elem of searchParams) {
//             const foundThing = formattedData.match(_fn_escapeRegExp(elem));
//             if (!!foundThing && !!foundThing.length) {
//                 basicSearchResult = true;
//             }
//         }
//     }

//     while (!!specialParams.length) {
//         const current = specialParams.shift();
//         switch (current) {
//             case "?specialCounterHitStatus?": {
//                 const locatedSpecialCounterHitStatus = data.counterHitFrames.match(/[a-zA-Z]/);
//                 if (!!locatedSpecialCounterHitStatus && !!locatedSpecialCounterHitStatus.length) {
//                     console.log(`basic: ${basicSearchResult}, located special counter hit: ${!!locatedSpecialCounterHitStatus && !!locatedSpecialCounterHitStatus.length}, data: ${formattedData}`);
//                     if (basicSearchResult) {
//                         return true;
//                     } else {
//                         break;
//                     }
//                 }
//                 break;
//             }
//             default: {
//                 break;
//             }
//         }
//     }

//     return basicSearchResult;
// };