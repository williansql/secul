export interface ArtistInfo {
    name: string;
    score: number;
    status: number;
}

export enum CategoryType {
    MUSIC = 'Música',
    DANCE = 'Dança',
    THEATER = 'Teatro',
    PRESS_OFFICE = 'Assessoria de imprensa',
    PHOTOGRAPHY = 'Fotografia',
    SOUND_TECHNICIAN = 'Técnico de som',
    FILMING_AND_EDITING = 'Filmagem e edição',
    VOICEOVER = 'Locução'
}
