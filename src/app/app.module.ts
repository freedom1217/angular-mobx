import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ActionsComponent } from './actions/actions.component';
import { BalanceComponent } from './balance/balance.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FormsModule } from '@angular/forms';
import { AccountService } from './account.service';

import {MobxAngularModule} from 'mobx-angular';

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    BalanceComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MobxAngularModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }