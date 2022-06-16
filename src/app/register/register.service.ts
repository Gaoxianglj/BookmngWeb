import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/shared/constants/api-url.constant';
import { HttpResult } from 'src/shared/models/http-result.model';
import {User} from "../login/user.model";

@Injectable({
  providedIn: 'root',
})
export class regService {
  constructor(private httpClient: HttpClient) {}

  /**
   * 登录
   *
   * @param {string} userName
   * @param {string} password
   * @param confirmpassword
   * @param email
   * @param birthday
   * @param gender
   * @param grade
   * @param interest
   * @param introduction
   * @return {*}  {Observable<HttpResult>}
   * @memberof LoginService
   */
  public reg(userName:string,password:string,confirmpassword:string,email:string,birthday:string,gender:number,grade:number,interest:string,introduction:string): Observable<HttpResult> {
    console.log("测试访问网址:"+apiUrl.registration)
    return this.httpClient.post<HttpResult>(apiUrl.registration, {
      userName: userName,
      password: password,
      confirmpassword:confirmpassword,
      email:email,
      birthday:birthday,
      gender:gender,
      grade:grade,
      interest:interest,
      introduction:introduction
    });
  }
}
