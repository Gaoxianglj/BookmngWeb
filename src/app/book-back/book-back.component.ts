import {Component, DoCheck, OnInit} from '@angular/core';
import {DetailsService} from "../details/details.service";
import {HttpResultStatus} from "../../shared/constants/http-result-status.constant";
import {UserBorrow} from "./book-back.model";
import {UserSelectComponent} from "../user-select/user-select.component";

@Component({
  selector: 'app-book-back',
  templateUrl: './book-back.component.html',
  styleUrls: ['./book-back.component.css']
})
export class BookBackComponent implements OnInit {
  public errorMessage!: string;
  public infoMessage!: string;
  public userId='';
  public UserBorrowHistoryList!:UserBorrow[]
  constructor(private service: DetailsService) { }



  ngOnInit(): void {
    this.UserBorrowHistoryList=[]
  }
  /**
   * 图书归还
   * @param {string} userIdRef
   * @param {string} bookIdRef
   * */
  BookReturn(userIdRef:string,bookIdRef:string){
   this.infoMessage = "null";
   let userId = Number(userIdRef)
   let bookId =Number(bookIdRef)
    this.service
      .BookReturn(userId,bookId)
      .subscribe((result) => {
        if (result.status !== HttpResultStatus.SUCCESS) {
          this.errorMessage = result.errors[0]?.message || '借阅失败';
        }else {
          this.infoMessage = '归还成功,userId:'+userId+'图书Id:'+bookId;

        }
      });
 }

  /**
   *
   */
  UserBorrowHistory(){
    this.service
      .UserBorrow(this.userId)
      .subscribe((result) => {
        if (result.status === HttpResultStatus.SUCCESS) {
          this.UserBorrowHistoryList=result.result
        }
      })
  }
}
