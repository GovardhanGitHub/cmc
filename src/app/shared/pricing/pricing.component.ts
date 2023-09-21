import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.scss"],
})

/**
 * Pricing component
 */
export class PricingComponent implements OnInit {
  constructor(private router: Router ,private dataService : DataService) { }

  events = []
  ngOnInit(): void {
this.events = this.dataService.events 

  }

 


  register(event){
    console.log(event)
    this.router.navigate(['/register',event.id]);

  }
}
