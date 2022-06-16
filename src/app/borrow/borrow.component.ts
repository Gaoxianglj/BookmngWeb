import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DetailsService } from '../details/details.service';

import { Book } from '../details/book.model';
import { HttpResultStatus } from 'src/shared/constants/http-result-status.constant';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css'],
})
export class BorrowComponent implements OnInit {
  @ViewChild('bookIdRef')
  public bookIdRef!: ElementRef;
  @ViewChild('authorNameRef')
  public authorNameRef!: ElementRef;
  @ViewChild('bookNameRef')
  public bookNameRef!: ElementRef;
  @ViewChild('publisherNameRef')
  public publisherNameRef!: ElementRef;
  public userId:number=Number(localStorage.getItem('userId'));
  public bookList: Book[] = [];

  public errorMessage!: string;
  public infoMessage!: string;

  constructor(private service: DetailsService) { }

  public ngOnInit(): void {
    // 取所有图书
    this.onSearch('', '', '', '');
  }

  /**
   * 查询图书
   *
   * @param {string} bookId
   * @param {string} authorName
   * @param {string} bookName
   * @param {string} publisherName
   * @memberof BorrowComponent
   */
  public onSearch(
    bookId: string,
    authorName: string,
    bookName: string,
    publisherName: string
  ): void {
    this.errorMessage = "null";
    console.log("diyibu"+bookName+"id"+bookId);
    this.service
      .getBookList(bookId, authorName, bookName, publisherName)
      .subscribe((result) => {
        console.log(result);
        if (result.status === HttpResultStatus.SUCCESS) {
          this.bookList = result.result;
          console.log(result.result+"aaaaa");
          console.log(this.bookList+"bbbbb");
          if (this.bookList.length === 0) {
            this.errorMessage = '没有検索結果';
            return;
          }
        } else {
          this.errorMessage = result.errors[0]?.message || '检索失败';
        }
      });
  }

  /**
   * 借阅图书
   *
   * @param {string} bookId
   * @param {string} userId
   * @return {*}  {void}
   * @memberof BorrowComponent
   */
  public onBorrow(bookId: string, userId: string): void {
    this.errorMessage = "null";
    if (userId === '') {
      this.errorMessage = '请输入用户ID。';
      return;
    }
    this.service.borrow(bookId, userId).subscribe((result) => {
      console.log("借阅")
      if (result.status !== HttpResultStatus.SUCCESS) {
        this.errorMessage = result.errors[0]?.message || '借阅失败';
        console.log(result.errors[0]?.message)
      } else {
        this.infoMessage = '借阅成功。借阅者ID：' + userId;
        this.onSearch(
          this.bookIdRef.nativeElement.value,
          this.authorNameRef.nativeElement.value,
          this.bookNameRef.nativeElement.value,
          this.publisherNameRef.nativeElement.value
        );
      }
    });
  }
}
