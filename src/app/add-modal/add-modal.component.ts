import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {DetailsService} from "../details/details.service";
import {HttpResultStatus} from "../../shared/constants/http-result-status.constant";
import {Router} from "@angular/router";
import {Sleep} from "../register/sleep";


@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {
  errorMessage = 'null';
  onClose: any;
  constructor(public bsModalRef: BsModalRef,private service:DetailsService,private router: Router) { }

  ngOnInit(): void {
  }
  close(){
    this.bsModalRef.hide();
  }
  close2() {
    this.onClose('close');
  }
  /**
   * 添加图书
   * @param {string} authorName
   * @param {string} bookName
   * @param {string} publisherName
   * @param {string} quantity
   * */
  addBook(
          authorName: string,
          bookName: string,
          publisherName: string,
          quantity: string){
    this.errorMessage="null";
    this.service
      .addBook(authorName,bookName,publisherName,Number(quantity))
      .subscribe((result) => {
        console.log(result);
        if (result.status === HttpResultStatus.SUCCESS) {
          console.log("成功了")
          Sleep(3000)
          location.reload();
        }else {
          this.errorMessage=result.errors[0].message || '添加失败';
        }
      });

  }
}
