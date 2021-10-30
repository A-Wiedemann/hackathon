import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-payout-page',
  templateUrl: './payout-page.component.html',
  styleUrls: ['./payout-page.component.css']
})
export class PayoutPageComponent {

  choices = ['Paypal', 'Bank Transfer', 'MPESA'];
  choice = '';

  showSuccess = false;


  onSelectPayment() {
    console.log('success');
    this.showSuccess = true;
  }
}
