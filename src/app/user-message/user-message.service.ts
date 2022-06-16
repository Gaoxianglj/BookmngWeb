import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpResult} from "../../shared/models/http-result.model";
import {apiUrl} from "../../shared/constants/api-url.constant";

@Injectable({
  providedIn: 'root',
})
export class UserMessageService {
  constructor(private httpClient: HttpClient) {}
  public getUserList(
    userName: string,
    introduction: string
  ): Observable<HttpResult> {

    return this.httpClient.post<HttpResult>("http://localhost:8002/user/message", {
      userName,
      introduction
    });
  }
}
