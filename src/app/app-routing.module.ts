import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { BorrowComponent } from './borrow/borrow.component';
import { BookManageComponent } from './book-manage/book-manage.component';
import {BookEditComponent} from "./book-edit/book-edit.component";

import {SizerComponent} from "./binding/sizer.component";
import {BindingComponent} from "./binding/binding.component";
import {RegisterComponent} from "./register/register.component";
import {UserMessageComponent} from "./user-message/user-message.component";
import { BookBackComponent} from "./book-back/book-back.component";
import {TheLogComponent} from "./the-log/the-log.component";
import {RankingListComponent} from "./ranking-list/ranking-list.component";
import {UserSelectComponent} from "./user-select/user-select.component";
import {RankingListUserComponent} from "./ranking-list-user/ranking-list-user.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'bookEdit',
    component:BookEditComponent,
  },

  {
    path:"bind",
    component:BindingComponent,
  },
  {
    path: 'reg',
    component: RegisterComponent,
  },
  {
    path: 'userMessage',
    component: UserMessageComponent,
  },
  {
   path: 'userSelect',
   component: UserSelectComponent,
  },
  {
    path: 'userRankingList',
    component:RankingListUserComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
    children: [
      {
        path: '',
        redirectTo: 'bookManage',
        pathMatch: 'full',
      },
      {
        path: 'borrow',
        component: BorrowComponent,
      },
      {
        path: 'bookManage',
        component: BookManageComponent,
      },
      {
        path: 'bookBack',
        component:BookBackComponent
      },
      {
        path: 'TheLog',
        component:TheLogComponent
      },
      {
        path: 'RankingList',
        component:RankingListComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
