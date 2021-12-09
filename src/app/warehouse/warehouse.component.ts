import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

  }

  userDetail = new FormGroup({
    baseurl: new FormControl(''),
    name: new FormControl(''),
    ram: new FormControl(''),
    vary:new FormControl(''),
    price: new FormControl(''),

  })

  name: any;
  showSpecificType: any = "mobile";
  price: any;
  baseurl: any;
  jsondata: any;
  vary: any;
  validateData() {
    console.log('sas',this.userDetail.value);
    if ((<HTMLInputElement>document.getElementById("type")).value == "mobile") {
      this.http.post<any>("http://localhost:3000/mobileComponent", this.userDetail.value)
        .subscribe(res => {
          this.router.navigate(['mobile']);
        }, err => {
          console.log("something went worng");
        })
    }

    if ((<HTMLInputElement>document.getElementById("type")).value == "tshirt") {
      this.jsondata = [
        {
          name: this.name,
          price: this.price,
          size: this.vary,
          baseurl: this.baseurl
        }
      ]
      this.http.post<any>("http://localhost:3000/tshirt", this.userDetail.value)
        .subscribe(res => {
          console.log("signup succesfull");
          this.userDetail.reset();
          this.router.navigate(['tshirt']);
        }, err => {
          console.log("something went worng");
        })

    }
  }

  changeContent() {
    this.showSpecificType = (<HTMLInputElement>document.getElementById("type")).value;
  }
}
