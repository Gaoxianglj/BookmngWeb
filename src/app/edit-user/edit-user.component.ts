import { Component, OnInit } from '@angular/core';
import {DetailsService} from "../details/details.service";
import {BsModalRef} from "ngx-bootstrap/modal";
import {userEdit} from "../user-message/user.edit";
import {User} from "../user-message/user.model";
import {EditUserService} from "./edit-user.service";
import {HttpResult} from "../../shared/models/http-result.model";
import {HttpResultStatus} from "../../shared/constants/http-result-status.constant";
import {Sleep} from "../register/sleep";
import {LoginService} from "../login/login.service";
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
 public user!:User;
 public errorMessage!: string;
  public userName='';

  public password='';

  public password2='';

  public email='';

  public birthday: string ='';

  public gender='';

  public grade='';

  public interestRef=[{title:'电影',checked:false},{title: '唱歌',checked: false},{title: '读书',checked: false}];

  public passwordError:boolean=false;public passwordError2:boolean=false;

  public buttondis=true;
  public introduction:string='';
  constructor(private service: EditUserService,userEdit:userEdit,public bsModalRef: BsModalRef,public loginservice:LoginService) {
    this.user=userEdit.user;
    this.userName=this.user.userName;
    this.email = this.user.email;
    this.birthday=String(this.user.birthday);
    this.gender=this.user.gender;
    this.grade=this.user.grade;
    this.introduction=this.user.introduction;
  }

  ngOnInit(): void {
  }
  close(){
    this.bsModalRef.hide();
  }
  /**
   * 保存用户修改
   * */
  public onUserSave():void{
    this.errorMessage = "null";
    let interst=''
    console.log(this.password)
    for (let item of this.interestRef){
      if(item.checked){
        interst=interst+item.title+","
      }
    }
    console.log("性别："+this.gender)
    if(this.gender==="男"){this.gender="0"}else {this.gender="1"}
this.service.editUser(this.userName, this.password, this.password2, this.email, this.birthday, Number(this.gender), Number(this.grade), interst, this.introduction).subscribe((result: HttpResult) => {
  console.log(result.status)
  if (result.status === HttpResultStatus.SUCCESS) {
    console.log("保存成功TTT")
    this.loginservice.login(this.userName, this.password).subscribe((result: HttpResult) => {
      if (result.status !== HttpResultStatus.SUCCESS) {

        this.errorMessage = result.errors[0]?.message || '获取用户失败';
        console.log("获取用户失败");
      } else {
        const user: User = result.result;
        localStorage.setItem('user', JSON.stringify(user));
      }
    });
    location.reload()
  }else {
    this.errorMessage = result.errors[0]?.message || '保存失败';
  }

});

  }
}
