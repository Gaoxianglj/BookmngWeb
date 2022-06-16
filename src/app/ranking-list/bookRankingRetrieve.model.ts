export interface rankingRetrieve{
  //图书排行榜
  bookList:bookRankingRetrieve[]
  //用户排行榜
  userList:userRankingRetrieve[]
}
export interface bookRankingRetrieve{
  //图书名
  bookName:string;
  //作者名
  authorName:string;
  //借阅次数
  borrowCount:number;
}
export interface userRankingRetrieve{
  //用户名
  userName:string;
  //借阅数量
  borrowCount:number;
}

