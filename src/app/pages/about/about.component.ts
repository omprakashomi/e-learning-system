import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   this.teamDetails;
  }
  teamDetails=[
    {
      name:"Kishan Kumar Gautam",
      designation:"Frontend/Backend",
      image:"../../../assets/kk.jpg"
    },
    {
      name:"Omprakash Kumar",
      designation:"Backend",
      image:"../../../assets/omi.jpg"
    },
    {
      name:"Mintu Kumar Panday",
      designation:"Frontend",
      image:"../../../assets/mintuji.jpg"
    },
    {
      name:"Jyodip Banerjee",
      designation:"Frontend",
      image:"../../../assets/jd.jpg"
    },
    {
      name:"Hiramon Pual",
      designation:"Frontend",
      image:"../../../assets/hiramon.jpg"
    }
  
  ]

}
