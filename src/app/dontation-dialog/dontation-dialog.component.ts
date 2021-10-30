import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import Web3 from 'web3';
import {AbiItem} from 'web3-utils';

@Component({
  selector: 'app-dontation-dialog',
  templateUrl: './dontation-dialog.component.html',
  styleUrls: ['./dontation-dialog.component.css']
})
export class DontationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DontationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log("test");
  }


  onDonateClick(): void {
    console.log("donate");
    let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/7d38d692acfd400f9cc0dc0a36df0e0e'));

    const myContractAddress = '0x3aDeb42d9F9940B3eFaDC2044BA27b0B72095C63';
    const myAbi: AbiItem[] = [{
      "inputs": [],
      "name": "getInteger",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    }];

    const myContract = new web3.eth.Contract(myAbi, myContractAddress);
    myContract.methods.getInteger().call().then((jsonRpcResult: any) => {
      console.log(jsonRpcResult);
    });

    this.dialogRef.close();
  }


}
