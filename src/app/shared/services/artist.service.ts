import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistRelation } from 'src/app/shared/models/artist-relation-interface';
import { ArtistRegister } from '../models/artist-register-interface';

@Injectable({
    providedIn: 'root',
})
export class ArtistService {
    constructor(private http: HttpClient) {}

    api = './../../../../assets/data/artists.json';
    apiManager = '../../../assets/data/register-artist.json';

    getArtistRelation(): Observable<ArtistRelation[]> {
        return this.http.get<ArtistRelation[]>(this.api);
    }

    getArtistRegister(): Observable<ArtistRegister[]> {
        return this.http.get<ArtistRegister[]>(this.apiManager);
    }
}
