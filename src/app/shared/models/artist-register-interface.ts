export interface ArtistRegister {
    area: string;
    artists: [
        {
            name: string;
            score: number;
            able: boolean;
            accredited: boolean;
        }
    ];
}
