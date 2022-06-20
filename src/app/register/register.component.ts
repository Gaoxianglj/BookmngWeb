import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {any} from "codelyzer/util/function";
import {regService} from "./register.service";
import {HttpResult} from "../../shared/models/http-result.model";
import {HttpResultStatus} from "../../shared/constants/http-result-status.constant";
import {LoginComponent} from "../login/login.component";
import {User} from "../login/user.model";
import {Router} from "@angular/router";
import {LoginService} from "../login/login.service";
import {Sleep} from "./sleep";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements DoCheck {
  errorMessage=''
  public userName='';

  public password='';

  public password2='';

  public email='';

  public birthday='';

  public gender='';

  public grade='';

  public interestRef=[{title:'电影',checked:false},{title: '唱歌',checked: false},{title: '读书',checked: false}];

  public passwordError:boolean=false;public passwordError2:boolean=false;

  public buttondis=true;
  public introduction:string='';
  constructor(private service:regService,private router: Router,private loginService:LoginService) {

  }

  ngOnInit(): void {
    this.errorMessage = "null";
  }
  /**
   * 用户注册
   */
  reg(
  ):void{
    this.errorMessage = "null";
    let interst=''
    console.log(this.password)
    for (let item of this.interestRef){
      if(item.checked){
        interst=interst+item.title+","
      }
    }
    if(this.gender==="男"){
      this.gender="0"
    }else {
      this.gender="1"
    }
    this.service.reg(this.userName, this.password, this.password2, this.email, this.birthday, Number(this.gender), Number(this.grade), interst, this.introduction).subscribe((result: HttpResult) => {
      if (result.status === HttpResultStatus.SUCCESS) {
        console.log("进来了"+result.errors)
        this.errorMessage="注册成功"
         Sleep(3000)
        this.submit(this.userName,this.password);
      }else {
        this.errorMessage=result.errors[0].message
      }

    });

  }

  /**
   * 判断输入是否合规
   */
  ngDoCheck(): void {
    const ze = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{8,20}$/;
    //判断密码是否符合规定
    if(this.password!='' && !ze.exec(this.password)){
      this.passwordError=true
      //前台显示密码不符合
    }else{
      this.passwordError=false;
    }
    //判断两遍密码是否相同
    if(this.password2!=this.password&& this.password2!=''){
      this.passwordError2=true;
    }else {this.passwordError2=false}
    if(this.passwordError2 || this.passwordError){
      console.log("false")
      this.buttondis=false;

    }else {
      this.buttondis=true;
    }
  }

  public submit(userName: string, password: string): void {
    this.errorMessage = "null";

    this.loginService.login(userName, password).subscribe((result: HttpResult) => {
      if (result.status !== HttpResultStatus.SUCCESS) {

        this.errorMessage = result.errors[0]?.message || '自动登录失败,3s后跳转至登录页面';
        console.log("自动登录失败");
        Sleep(3000)
        this.router.navigate(['/login']);
      } else {
         console.log()
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

}
