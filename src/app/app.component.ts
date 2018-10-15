import { Component, OnInit } from '@angular/core';
import { BankServiceService } from './service/bank-service';
import { BankDataModel } from './model/BankData.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cardData: Array<BankDataModel>;

  constructor(private bankApi: BankServiceService) {

  }

  ngOnInit() {
    this.callApi();
  }

  callApi() {
    this.bankApi.doGET().subscribe(data => {
      // take only the bank with logos
      
      
      this.cardData = data.filter(end => {
        return end.logos.length > 0;
      });
    });
 }
}

