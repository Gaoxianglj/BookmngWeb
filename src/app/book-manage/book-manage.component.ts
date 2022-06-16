import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {AddModalComponent} from "../add-modal/add-modal.component";
import {BookEditComponent} from "../book-edit/book-edit.component";
import {Book} from "../details/book.model";
import {HttpResultStatus} from "../../shared/constants/http-result-status.constant";
import {DetailsService} from "../details/details.service";
import {bookEdit} from "../book-edit/book.edit.service"

@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.css']
})
export class BookManageComponent implements OnInit{
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
  public editBook!:Book;
  public errorMessage!: string;
  public infoMessage!: string;
  private bsModalRef: BsModalRef | undefined;

  constructor(private modalService: BsModalService,private service: DetailsService,private BookEditclass:bookEdit) { }

  showaddmodal(){
    this.bsModalRef = this.modalService.show(AddModalComponent);
  }
  showeditmodal(){

  }
  /**
   * 查询图书（有条件）
   * @param {string} bookId
   * @param {string} authorName
   * @param {string} bookName
   * @param {string} publisherName
   * */
  selectBook(bookId: string,
             authorName: string,
             bookName: string,
             publisherName: string){
    this.errorMessage = "null";
    this.service
      .getBookList(bookId, authorName, bookName, publisherName)
      .subscribe((result) => {
        console.log(result.status);
        if (result.status === HttpResultStatus.SUCCESS) {
          console.log("进来了")
          this.bookList = result.result;
          console.log(this.bookList[0].bookName+"书名"+this.bookList.length)
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
   * 打开图书编辑页面
   * */
  BookEdit(
    book:Book
  ){
    this.BookEditclass.book=book
    console.log(this.BookEditclass.book.bookName+"管理界面")
    this.bsModalRef =this.modalService.show(BookEditComponent);
  }

  ngOnInit(): void {
    this.selectBook('','','','')
  }


}
