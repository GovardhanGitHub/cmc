import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-registration-status",
  templateUrl: "./registration-status.component.html",
  styleUrls: ["./registration-status.component.scss"],
})
export class RegistrationStatusComponent implements OnInit {
  queryParams: any = {};
  confRegObj: any = {};

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}


  printPage() {
    window.print(); // Opens the browser's print dialog
  }


  ngOnInit() {
    // Access the query parameters
    this.queryParams.regno = this.route.snapshot.queryParamMap.get("regno");
    this.queryParams.inputcaption1 =
      this.route.snapshot.queryParamMap.get("status");
    this.queryParams.responseTransid =
      this.route.snapshot.queryParamMap.get("transid");
    // this.queryParams.inputvalue5 =
    //   this.route.snapshot.queryParamMap.get("message");

    if (this.queryParams.inputcaption1 == "Y") {
      this.dataService
        .getConferenceDataByRegno(this.queryParams.regno)
        .subscribe((res: any) => {
          this.confRegObj = res;
          console.log(res);
          this.confRegObj = this.updateObject(
            this.confRegObj,
            this.queryParams
          );
          setTimeout(() => {
            this.updateConf(this.confRegObj);
          }, 1000);
        });
    }
  }

  updateObject(target: any, updates: Record<string, any>): any {
    target = { ...target, ...updates };
    return target;
  }

  updateConf(data: any) {
    console.log("data ", data);

    this.dataService.insertConferenceData(data).subscribe((res) => {
      console.log(res);
      
    });
  }
}
