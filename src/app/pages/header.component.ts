import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit{
    searchTerm:String="";
 constructor(private route: ActivatedRoute , private router: Router){
     
 }
 ngOnInit(): void {
     this.route.params.subscribe(params=>{
         if(params.searchTearm){
         this.searchTerm=params.searchTearm;
        }
     })
 }
 search():void{
     if(this.searchTerm){
         this.router.navigateByUrl('/search/'+ this.searchTerm);
     }
 }
}