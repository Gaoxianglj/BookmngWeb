import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { STORAGE_KEY_USER } from 'src/shared/constants/common.constant';
import { HttpResultStatus } from 'src/shared/constants/http-result-status.constant';
import { HttpResult } from 'src/shared/models/http-result.model';
import { LoginService } from './login.service';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  public errorMessage='null';

  constructor(private service: LoginService, private router: Router) {}

  /**
   * 登录
   *
   * @param {string} userName
   * @param {string} password
   * @memberof LoginComponent
   */
  public submit(userName: string, password: string): void {
    this.errorMessage = "null";

    this.service.login(userName, password).subscribe((result: HttpResult) => {
      if (result.status !== HttpResultStatus.SUCCESS) {

        this.errorMessage = result.errors[0]?.message || '登录失败';
        console.log("登录失败");
      } else {

        const user: User = result.result;
        localStorage.setItem('user', JSON.stringify(user));
        if (user.userType === 1) {
          // 管理员


          this.router.navigate(['/details']);//跳转
          console.log("管理员登录成功");
        }else {
          this.router.navigate(['/userMessage']);
        }
        console.log("userID"+user.userId);
        localStorage.setItem('userId',String(user.userId));
      }
    });
  }
  public reg(){
    this.router.navigate(['/reg']);
  }

}
