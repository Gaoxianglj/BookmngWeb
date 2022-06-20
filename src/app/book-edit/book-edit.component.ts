import {Component, OnInit} from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { HttpResultStatus } from 'src/shared/constants/http-result-status.constant';
import { Book } from '../details/book.model';
import { DetailsService } from '../details/details.service';
import {bookEdit} from "./book.edit.service"
import {BsModalRef} from "ngx-bootstrap/modal";
@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit
 {
  public bookModal!: Book;
  public errorMessage="null";

  constructor(private service: DetailsService,bookEdit:bookEdit,public bsModalRef: BsModalRef) {
    this.bookModal=bookEdit.book
    console.log("book"+this.bookModal.bookName)
  }

   close(){
    this.bsModalRef.hide();
  }
  /**
   * 保存图书
   *
   * @param {string} bookId
   * @param {string} authorName
   * @param {string} bookName
   * @param {string} publisherName
   * @param {number} quantity
   * @memberof BookEditComponent
   */
  public onBookSave(
    bookId: string,
    authorName: string,
    bookName: string,
    publisherName: string,
    quantity: string
  ): void {
    this.errorMessage = "null";

    this.service
      .saveBook(bookId, authorName, bookName, publisherName, Number.parseInt(quantity))
      .subscribe((result) => {
        if (result.status !== HttpResultStatus.SUCCESS) {
          this.errorMessage = result.errors[0]?.message || '保存失败';
        } else {

          location.reload();
        }
      });
  }

  /**
   * 删除图书
   *
   * @param {string} bookId
   * @memberof BookEditComponent
   */
  public onBookDelete(bookId: string): void {
    this.errorMessage = "null";

    this.service.deleteBook(bookId).subscribe((result) => {
      if (result.status !== HttpResultStatus.SUCCESS) {
        this.errorMessage = result.errors[0]?.message || '删除失败';
      } else {

        this.close();
      }
    });
  }

   ngOnInit(): void {

     console.log("book"+this.bookModal.bookName)
   }
}
