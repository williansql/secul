import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactInfo } from 'src/app/shared/models/contactinfo-interface';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root',
})
export class MailService {
  url = environment.mailAPI;

  constructor(private http: HttpClient) {}

  sendMail(value: ContactInfo): Observable<ContactInfo> {
    return this.http.post<ContactInfo>(this.url, value);
  }
}
