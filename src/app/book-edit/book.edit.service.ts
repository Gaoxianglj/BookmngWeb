import {Injectable} from "@angular/core";
import {Book} from "../details/book.model";




@Injectable({
  providedIn: 'root',
})
export class bookEdit{
  public book!:Book;
}
