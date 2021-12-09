import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  this.fetchMobile();
  }
  Hmobiles:any=[];
  searchQuery:any=[];
  fetchMobile() {
    this.http.get<any>("http://localhost:3000/mobileComponent").subscribe(
      res => {
        if (res) {
          this.Hmobiles = res;
          console.log('data', this.Hmobiles);
        }
        else {
          return null;
        }

      }, err => {
        console.log("Something Went Worng");
      }
    )
  }

  search(event) {
    if (event.keyCode == 13 && this.searchQuery.toLowerCase()=="tshirt") {
      this.router.navigate(['tshirt']);
    }
  }

  viewDesc(element:any)
  { 
     this.router.navigate(['desc'],{state:element});
            
  }


}
