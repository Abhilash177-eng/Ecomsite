import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.css']
})
export class TshirtComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.fetchShirt();
  }

  Hshirt:any=[];
  searchQuery:any=[];
  fetchShirt() {
    this.http.get<any>("http://localhost:3000/tshirt").subscribe(
      res => {
        if (res) {
          this.Hshirt = res;
          console.log('data', this.Hshirt);
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
    if (event.keyCode == 13 && this.searchQuery.toLowerCase()=="mobile") {
      this.router.navigate(['mobile']);
    }
  }


  viewDesc(element:any)
  {
    this.router.navigate(['desc'],{state:element});

  }








}
