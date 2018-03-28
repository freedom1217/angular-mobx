import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-transactions',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private account: AccountService) { }

  ngOnInit() {
  }

}