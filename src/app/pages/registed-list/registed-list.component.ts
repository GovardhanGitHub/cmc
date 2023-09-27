import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { log } from "console";
import { DataService } from "src/app/data.service";
import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";

@Component({
  selector: "app-registed-list",
  templateUrl: "./registed-list.component.html",
  styleUrls: ["./registed-list.component.scss"],
})
export class RegistedListComponent implements OnInit {
  secretKey: string = ""; // Property to store the secret key
  showTable: boolean = false; // Flag to determine if the table should be displayed

  payments = [
    // Add more payment objects here
  ];

  constructor(private dataService: DataService, private router: Router) {}

  exportToExcel() {
    const element = document.getElementById("myTable"); // Replace 'myTable' with the ID of your HTML table
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const excelBuffer: any = XLSX.write(wb, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    FileSaver.saveAs(blob, "myTable.xlsx"); // Specify the desired file name
  }

  viewDetail(rowData: any) {
    this.router.navigate(["detail", { data: JSON.stringify(rowData) }]);
  }

  delete(id) {
    if (this.confirmData())
      this.dataService.deleteConferenceData(id).subscribe((res) => {
        console.log(res);
        this.getList()
      });
  }

  confirmData(): boolean {
    return confirm("Are you sure you want to delete?");
  }

  ngOnInit(): void {
  this.getList()
  }

  getList(){
    this.payments = []
    this.dataService.getAllConferenceData().subscribe((res) => {
      this.payments = res;
    });
  }

  checkSecretKey() {
    // Replace 'yourSecretKey' with the actual correct secret key
    if (this.secretKey === "975312") {
      this.showTable = true; // Show the table if the key is correct
    } else {
      this.showTable = false; // Hide the table if the key is incorrect
      // Optionally, you can display an error message or take other actions.
    }
  }

  updateStatus() {
    for (const obj of this.payments) {
      // Call the service method to update the object's status
      // this.dataService.updateObjectStatus(obj).subscribe(
      //   (response: any) => {
      //     console.log(response)
      //   },
      //   (error) => {
      //     console.error('Error updating object status:', error);
      //   }
      // );
    }
  }
}
