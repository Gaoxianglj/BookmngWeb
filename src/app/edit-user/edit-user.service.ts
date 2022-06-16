import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpResult} from "../../shared/models/http-result.model";
import {apiUrl} from "../../shared/constants/api-url.constant";

@Injectable({
  providedIn: 'root',
})
export class EditUserService {
  constructor(private httpClient: HttpClient) {}
public editUser(userName:string,password:string,confirmpassword:string,email:string,birthday:string,gender:number,grade:number,interest:string,introduction:string): Observable<HttpResult>{
  return this.httpClient.post<HttpResult>(apiUrl.EditUser, {
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
