import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchMobile();
    this.fetchTv();
    this.fetchWatch();
  }
  data = [
    { img: "https://assets.ajio.com/medias/sys_master/images/images/h17/hd7/45679787638814/03122021-D-unisex-topbanner-p1-paydayweekend-flat60.jpg", title: "Slide 1" },
    { img: "https://www.ajio.com/medias/sys_master/images/images/h10/h4a/45697524138014/04122021-D-unisex-topbanner-p4-branddays-puma-min65.jpg", title: "Slide 2" },
    { img: "https://assets.ajio.com/medias/sys_master/images/images/h34/h8d/45697523220510/04122021-D-unisex-topbanner-p2-winterwear-brands-min50.jpg", title: "Slide 3" },
    { img: "https://assets.ajio.com/medias/sys_master/images/images/h80/ha1/45733430231070/06122021-D-unisex-topbanner-p2-winterfiesta-extra750.jpg", title: "Slide 4" }
  ];
  Hmobiles: any = [];
  Htv: any = [];
  Hwatch: any = [];
  searchQuery:any=[];
  fetchMobile() {
    this.http.get<any>("http://localhost:3000/Homemobile").subscribe(
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

  fetchTv() {
    this.http.get<any>("http://localhost:3000/HomeTv").subscribe(
      res => {
        if (res) {
          this.Htv = res;
          console.log('data', this.Htv);
        }
        else {
          return null;
        }

      }, err => {
        console.log("Something Went Worng");
      }
    )
  }

  fetchWatch() {
    this.http.get<any>("http://localhost:3000/HomeWatches").subscribe(
      res => {
        if (res) {
          this.Hwatch = res;
          console.log('data', this.Hwatch);
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
      console.log(this.searchQuery);
      this.router.navigate(['mobile'])
    }

    if (event.keyCode == 13 && this.searchQuery.toLowerCase()=="tshirt") {
      console.log(this.searchQuery);
      this.router.navigate(['tshirt'])
    }
  }

}
