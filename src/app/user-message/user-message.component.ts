import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {HttpResultStatus} from "../../shared/constants/http-result-status.constant";
import {UserMessageService} from "./user-message.service";
import {User} from "./user.model";
import {BsModalService} from "ngx-bootstrap/modal";
import {BsModalRef} from "ngx-bootstrap/modal/bs-modal-ref.service";
import {EditUserComponent} from "../edit-user/edit-user.component";
import {userEdit} from "./user.edit";

export function userMessage() {
}


@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {

  @ViewChild('bookIdRef')
  public bookIdRef!: ElementRef;
  @ViewChild('authorNameRef')
  public authorNameRef!: ElementRef;
  @ViewChild('bookNameRef')
  public bookNameRef!: ElementRef;
  @ViewChild('publisherNameRef')
  public publisherNameRef!: ElementRef;
  public userId:number=Number(localStorage.getItem('userId'));

  public user!:User;
  private bsModalRef: BsModalRef | undefined;
  public errorMessage!: string;
  public infoMessage!: string;

  constructor(private service: UserMessageService,private modalService: BsModalService,private userEdit:userEdit) { }




  ngOnInit(): void {
    this.user=JSON.parse(String( localStorage.getItem('user')));
    console.log("兴趣"+this.user.interest)
    if(this.user.gender=="0"){
      this.user.gender="男"
    }else {
      this.user.gender="女"
    }
  }

  /***
   * 修改用户信息
   * @param {User} user
   */
  useredit(user:User){
    this.userEdit.user=user
    this.bsModalRef =this.modalService.show(EditUserComponent)
  }
}
