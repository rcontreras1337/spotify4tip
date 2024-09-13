import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL: string = environment.api;
  private readonly loginEndpoint: string = '/auth/login'
  constructor(private httpClient: HttpClient, private _cookie: CookieService) { }


/**
 *
 * @param email
 * @param password
 * @returns validación de inicio sesión
 */
  sendCredentials(email: string, password: string): Observable<any>{
    console.log(email, password);
    const body = {
      email,
      password,
    }

    return this.httpClient.post(
      `${this.URL}${this.loginEndpoint}`,
      body
    )
      .pipe(
        tap((responseOK: any) => {
          const { tokenSession, data } = responseOK;
          this._cookie.set('token_service', tokenSession, 4, '/');
        }),
      );
  }
}
