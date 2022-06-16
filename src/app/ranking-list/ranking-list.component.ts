import { Component, OnInit } from '@angular/core';
import {DetailsService} from "../details/details.service";
import {bookRankingRetrieve, rankingRetrieve, userRankingRetrieve} from "./bookRankingRetrieve.model";
import {HttpResultStatus} from "../../shared/constants/http-result-status.constant";

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css']
})
export class RankingListComponent implements OnInit {
  public errorMessage: string | undefined;
  public ranking!: rankingRetrieve;

  constructor(private service:DetailsService) { }

  ngOnInit(): void {
    this.Ranking()
  }

  /**
   * 排行榜
   */
  Ranking(){
     this.service
       .Ranking()
       .subscribe((result) => {
         if (result.status === HttpResultStatus.SUCCESS) {
           this.ranking=result.result;
           console.log(this.ranking.bookList[0].bookName+"wasd")
         }
       });
  }
}
