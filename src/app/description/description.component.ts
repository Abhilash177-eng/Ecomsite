import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  
  }

  data=this.router.getCurrentNavigation().extras.state;   
  searchQuery:any=[];

  search(event) {
    if (event.keyCode == 13 && this.searchQuery.toLowerCase()=="mobile") {
      console.log(this.searchQuery);
      this.router.navigate(['mobile'])
    }

    if (event.keyCode == 13 && this.searchQuery.toLowerCase()=="tshirt") {
      console.log(this.searchQuery);
      this.router.navigate(['tshirt'])
    }
  }
  
}
