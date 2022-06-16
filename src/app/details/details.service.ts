import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/shared/constants/api-url.constant';
import { HttpResult } from 'src/shared/models/http-result.model';
import {HttpResultStatus} from "../../shared/constants/http-result-status.constant";

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * 查询所有图书
   *
   * @return {*}  {Observable<HttpResult>}
   * @memberof DetailsService
   */
  public getBooksAll(): Observable<HttpResult> {
    return this.httpClient.post<HttpResult>(apiUrl.retrieveBooks, null);
  }

  /**
   * 图书借阅
   *
   * @param {string} bookId
   * @param {string} userId
   * @return {*}  {Observable<HttpResult>}
   * @memberof DetailsService
   */
  public borrow(bookId: string, userId: string): Observable<HttpResult> {
    console.log("借用请求发出")
    return this.httpClient.post<HttpResult>(apiUrl.borrow, {
      userId,
      bookId
    });
  }

  /**
   * 查询图书列表
   *
   * @param {string} bookId
   * @param {string} authorName
   * @param {string} bookName
   * @param {string} publisherName
   * @return {*}  {Observable<HttpResult>}
   * @memberof DetailsService
   */
  public getBookList(
    bookId: string,
    authorName: string,
    bookName: string,
    publisherName: string
  ): Observable<HttpResult> {
    console.log(bookId+"ccccc");
    return this.httpClient.post<HttpResult>(apiUrl.retrieveBooksByParams, {
      bookId,
      authorName,
      bookName,
      publisherName,
    });
  }

  /**
   * 编辑（添加）图书
   *
   * @param {string} bookId
   * @param {string} authorName
   * @param {string} bookName
   * @param {string} publisherName
   * @param {number} quantity
   * @return {*}  {Observable<HttpResult>}
   * @memberof DetailsService
   */
  public saveBook(
    bookId: string,
    authorName: string,
    bookName: string,
    publisherName: string,
    quantity: number
  ): Observable<HttpResult> {
    return this.httpClient.post<HttpResult>(apiUrl.editBook, {
      bookId,
      authorName,
      bookName,
      publisherName,
      quantity,
    });
  }
  /**
   * 添加 图书
   *
   * @param {string} authorName
   * @param {string} bookName
   * @param {string} publisherName
   * @param {number} quantity
   * @return {*}  {Observable<HttpResult>}
   * @memberof DetailsService
   */
  public addBook(
    authorName: string,
    bookName: string,
    publisherName: string,
    quantity: number
  ): Observable<HttpResult> {
    return this.httpClient.post<HttpResult>(apiUrl.addBook, {
      authorName,
      bookName,
      publisherName,
      quantity,
    });
  }
  /**
   * 删除图书
   *
   * @param {string} bookId
   * @return {*}  {Observable<HttpResult>}
   * @memberof DetailsService
   */
  public deleteBook(bookId: string): Observable<HttpResult> {
    return this.httpClient.post<HttpResult>(apiUrl.deleteBook, { bookId });
  }
/**
 * 图书归还
 * @param {string} userId
 * @param {string} bookId
 * */
  public BookReturn(userId:number,bookId:number){
    return this.httpClient.post<HttpResult>(apiUrl.returnbook,{userId,bookId});
  }
 /**
  * 排行榜
  * */
  public Ranking(){
    console.log(apiUrl.ranking)
    return this.httpClient.post<HttpResult>(apiUrl.ranking,null);
  }
  /**
   * 查询日志
   * */
  public TheLog(){
    return this.httpClient.post<HttpResult>(apiUrl.TheLog,null);
  }
  /**
   * 导出日志
   * */
  public export(){
    return this.httpClient.get<HttpResult>(apiUrl.export);
  }

  /**
   * 查询该用户未归还借阅记录
   */
  public UserBorrow(userId:string){
    return this.httpClient.post<HttpResult>(apiUrl.UserBorrow,{userId});
  }
}
