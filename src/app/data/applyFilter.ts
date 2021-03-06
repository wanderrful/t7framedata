import { CharacterFrameData, CharacterFrameDataHeaders } from './framedata.interface';
import { _fn_parseHitData } from "./helpers";

export const fn_applyFilter = (filterType: string): ((data: CharacterFrameData, filter: string) => boolean) => (data: CharacterFrameData, filter: string) => {
    // Filter out the special, passive params
    let normalParams = '';
    const specialParams = /\?.*?\?/.exec(filter) || [];
    const tokenizedFilter = filter.split(" ");
    tokenizedFilter.forEach(t => {
        if (!specialParams.includes(t)) normalParams += " " + t;
    });

    // Extend the default MatSort algorithm
    let basicSearchResult = filterPredicate(data, normalParams);

    // Filter by column, if needed
    const filterColumn = filterType;
    if (filterColumn !== "All" && filter.trim().length > 0) {
        for (let column in data) {
            if (CharacterFrameDataHeaders[column] === filterColumn) {
                basicSearchResult = data[column].trim().toLowerCase().indexOf(normalParams.toLowerCase()) !== -1;
            }
        }
    }

    // Apply any special parameters
    while (!!specialParams.length) {
        const current = specialParams.shift();
        switch (current) {
            case "?specialCounterHitStatus?": {
                const locatedSpecialCounterHitStatus = data.counterHitFrames.match(/[a-zA-Z]/);
                basicSearchResult = basicSearchResult && !!locatedSpecialCounterHitStatus && !!locatedSpecialCounterHitStatus.length;
                break;
            }
            case "?14fPunisher?": {
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
                break;
            }
            case "?unblockable?": {
                const isUnblockable = data.hitLevel.indexOf("!") !== -1;
                basicSearchResult = basicSearchResult && isUnblockable;
                break;
            }
            case "?launchers?": {
                const launchesOnHit = data.hitFrames.toLowerCase().indexOf("launch") !== -1;
                basicSearchResult = basicSearchResult && launchesOnHit;
                break;
            }
            case "?plusOnBlock?": {
                const plusOnBlock = data.blockFrames.length > 0 && data.blockFrames[0] === "+";
                basicSearchResult = basicSearchResult && plusOnBlock;
                break;
            }
            case "?safeOnBlock?": {
                const blockFrames = _fn_parseHitData(data.blockFrames);
                basicSearchResult = basicSearchResult && blockFrames > -10;
                break;
            }
            case "?homing?": {
                const isHoming = data.notes.toLowerCase().indexOf("homing") !== -1;
                basicSearchResult = basicSearchResult && isHoming;
                break;
            }
            case "?throws?": {
                const isThrow = data.hitFrames.toLowerCase().indexOf("throw") !== -1 || data.counterHitFrames.toLowerCase().indexOf("throw") !== -1;
                basicSearchResult = basicSearchResult && isThrow;
                break;
            }
            default: {
                break;
            }
        }
    }
    return basicSearchResult;
};

// The default MatSort algorithm, for reference
const filterPredicate: ((data: CharacterFrameData, filter: string) => boolean) = (data: CharacterFrameData, filter: string): boolean => {
    const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
        return currentTerm + (data as { [key: string]: any })[key] + '◬';
    }, '').toLowerCase();

    const transformedFilter = filter.trim().toLowerCase();

    return dataStr.indexOf(transformedFilter) != -1;
}