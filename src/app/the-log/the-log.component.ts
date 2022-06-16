import { Component, OnInit } from '@angular/core';
import {LogRetrieve} from "./LogRetrieve";
import {DetailsService} from "../details/details.service";
import {HttpResultStatus} from "../../shared/constants/http-result-status.constant";
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-the-log',
  templateUrl: './the-log.component.html',
  styleUrls: ['./the-log.component.css']
})
export class TheLogComponent implements OnInit {
  public logRetrieveList!:LogRetrieve[];
  constructor(private service:DetailsService,private router: Router) { }

  ngOnInit(): void {
    this.theLog();
  }

  /**
   * 查看登录日志
   */
  theLog(){
  this.service
    .TheLog()
    .subscribe((result) => {
      if (result.status === HttpResultStatus.SUCCESS) {
        this.logRetrieveList=result.result
      }
      for(let log=0;log< this.logRetrieveList.length;log++){
          if(this.logRetrieveList[log].userType=="1"){
            this.logRetrieveList[log].userType="管理员"
          }else {
            this.logRetrieveList[log].userType="用户"
          }
      }
    });
  }

}
