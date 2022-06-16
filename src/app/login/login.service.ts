import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/shared/constants/api-url.constant';
import { HttpResult } from 'src/shared/models/http-result.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  /**
   * 登录
   *
   * @param {string} userName
   * @param {string} password
   * @return {*}  {Observable<HttpResult>}
   * @memberof LoginService
   */
  public login(userName: string, password: string): Observable<HttpResult> {
    console.log("测试访问网址:"+apiUrl.login)
    return this.httpClient.post<HttpResult>(apiUrl.login, {
      userName: userName,
      password: password,
    });
  }
}
