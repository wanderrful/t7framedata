export enum CharacterFrameDataHeaders {
    command = "Commandasdf",
    hitLevel = "Hit Level",
    damage = "Damage",
    startupFrames = "Startup Frames",
    blockFrames = "Block Frames",
    hitFrames = "Hit Frames",
    counterHitFrames = "Counter Hit Frames",
    notes = "Notes",
}

export interface CharacterFrameData {
    command: string;
    hitLevel: string;
    damage: string;
    startupFrames: string;
    blockFrames: string;
    hitFrames: string;
    counterHitFrames: string;
    notes: string;
}