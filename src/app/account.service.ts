import { Injectable } from '@angular/core';
import { observable, computed, action } from 'mobx-angular';
//import { sum } from 'lodash'; //第三方套件


@Injectable()
export class AccountService {
  @observable transactions: number[] = []; //交易記錄；
  //引進 observable；observable 為decorator ，可用於ES7; Typescript；減少打字XD；就可以秀資料出來了~
  //用 observable，列為觀察者，如果被更改的話要被更新
  constructor() { }

  //修改值寫在service裡頭，不要分散在component
  //優化用@computed
 @computed get Balance(): number {
   //getBalance(): number
    console.count('CALL service');
   //console.log(sum(this.transactions));
   //return sum(this.transactions);
     return this.transactions.reduce((a, b) => a + b, 0); //0是起始值
  }

  @computed get isNegative() : boolean { //取總額；寫法 @computed get 方法()
    //isNegative(): boolean
    //return this.getBalance() < 0;
    return this.Balance < 0;
  }

  //acton 放在observable； 
  //方法跑完才會做交易；功能之一可以記錄log，但只能在 2.x版可以用；現已為3.x版；非強制性功能
  @action deposit(money: number) { //上加
    this.transactions = [...this.transactions, money]; //把數字展開來；如 1、2、3、4
  }

  @action withdraw(money: number) { //下減
    this.transactions = [...this.transactions, -money];
  }
}