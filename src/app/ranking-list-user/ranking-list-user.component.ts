import { Component, OnInit } from '@angular/core';
import {rankingRetrieve} from "../ranking-list/bookRankingRetrieve.model";
import {DetailsService} from "../details/details.service";
import {HttpResultStatus} from "../../shared/constants/http-result-status.constant";

@Component({
  selector: 'app-ranking-list-user',
  templateUrl: './ranking-list-user.component.html',
  styleUrls: ['./ranking-list-user.component.css']
})
export class RankingListUserComponent implements OnInit {

  public errorMessage: string | undefined;
  public ranking!: rankingRetrieve;

  constructor(private service:DetailsService) { }

  ngOnInit(): void {
    this.Ranking()
  }

  /**
   *排行榜（用户）
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
