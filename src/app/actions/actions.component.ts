import { AccountService } from './../account.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-actions',
  changeDetection:ChangeDetectionStrategy.OnPush,//手動load畫面，有用到service的component都要貼
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor(private account: AccountService) { }

  ngOnInit() {
  }

  deposit() {

  }

  withdraw() {

  }

  show(){
    console.count('Call Time'); //抓方法被呼叫幾次
  }

}