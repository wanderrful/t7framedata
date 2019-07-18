import { _fn_parseFrameData } from './helpers';

export const fn_sortFrameData = (data, sortHeaderId) => {
    switch (sortHeaderId) {
        case 'hitLevel': {
            const temp = data.hitLevel.split(/(l|m|h|Sm)/);
            let extracted = '';
            for (let elem of temp) {
                let trimmed = elem.trim();
                if (trimmed === 'h' || trimmed === 'm' || trimmed === 'l' || trimmed === 'Sm') {
                    extracted = trimmed;
                    break;
                }
            }
            switch (extracted) {
                case 'l': { return 1; }
                case 'Sm': { return 2; }
                case 'm': { return 3; }
                case 'h': { return 4; }
                default: { return 0; }
            }
        }
        case 'damage': {
            // If it's broken up into pieces, rank it by its sum total
            if (data.damage.includes(',')) {
                return data.damage.split(',').reduce((acc, cur) => (acc + parseInt(cur.trim())), 0);
            }
            if (!data.damage.length) {
                return 0;
            }
            return parseInt(data.damage);
        }
        case 'startupFrames': {
            // Parse through the nonsense and just rank it by the first number given
            return _fn_parseFrameData(data.startupFrames);
        }
        default: {
            return 0;
        }
    }
};