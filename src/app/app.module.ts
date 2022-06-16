import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { BorrowComponent } from './borrow/borrow.component';
import { BookManageComponent } from './book-manage/book-manage.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { SimpleModalModule } from 'ngx-simple-modal';
//引入表单相关模块进行双向绑定
import {FormsModule} from '@angular/forms';

import {BindingComponent} from "./binding/binding.component";
import { SizerComponent } from './binding/sizer.component';


import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { UserMessageComponent } from './user-message/user-message.component';
import { BookBackComponent } from './book-back/book-back.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { TheLogComponent } from './the-log/the-log.component';
import { RankingListComponent } from './ranking-list/ranking-list.component';
import { UserSelectComponent } from './user-select/user-select.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RankingListUserComponent } from './ranking-list-user/ranking-list-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // DetailsComponent,
    BorrowComponent,
    BookManageComponent,
    BookEditComponent,

    BindingComponent,
    SizerComponent,

    DetailsComponent,
    RegisterComponent,
    UserMessageComponent,
    BookBackComponent,
    AddModalComponent,
    TheLogComponent,
    RankingListComponent,
    UserSelectComponent,
    EditUserComponent,
    RankingListUserComponent,


  ],
   entryComponents: [BookEditComponent],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SimpleModalModule.forRoot({ container: document.body }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
