import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { log } from "console";
import { DataService } from "src/app/data.service";
import { XmlParserService } from "src/app/xml-parser.service";

@Component({
  selector: "app-check-status",
  templateUrl: "./check-status.component.html",
  styleUrls: ["./check-status.component.scss"],
})
export class CheckStatusComponent implements OnInit {
  form: FormGroup;
  detailForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private parser: XmlParserService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      regno: ["", Validators.required],
      transid: ["", Validators.required],
      conference: ["", Validators.required],
      confyear: ["", Validators.required],
      bankname: ["", Validators.required],
    });
    this.detailForm = this.fb.group({
      phone: ["", Validators.required],
    });
  }

  status: any = {};

  onSubmit() {
    if (this.form.valid) {
      // Handle form submission here
      console.log(this.form.value);
      this.dataService.sendSOAPRequestForStatus(this.form.value).subscribe(
        (res) => {
          console.log(res);
          this.status = this.parser.parseXmlForStatus(res);
          console.log(this.status);
        },
        (error) => alert("something went wrong " + error)
      );
    } else {
      alert("all field values are required");
    }
  }

  obj: any = {};

  detailFormSubmit() {
    if (this.detailForm.valid) {
      // Handle form submission here
      console.log(this.form.value);
      this.dataService
        .getConferenceDataByPhone(this.detailForm.get("phone").value)
        .subscribe(
          (res) => {
            this.obj = res;
          },
          (error) => alert("something went wrong " + error)
        );
    }
  }
}
