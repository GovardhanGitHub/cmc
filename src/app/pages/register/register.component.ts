import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { DataService, PaymentInfo } from "src/app/data.service";
import { XmlParserService } from "src/app/xml-parser.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  shouldDisplayElement = false;
  totalPrice: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dataService: DataService,
    private xmlParserService: XmlParserService
  ) {}

  eventId: string;
  event: any;
  events = [];
  paymentInfo: PaymentInfo;

  ngOnInit() {
    this.events = this.dataService.events;
    this.paymentInfo = new PaymentInfo(); // Initialize the instance

    this.route.params.subscribe((params) => {
      this.eventId = params["id"]; // 'id' should match the route parameter name defined in your routing configuration
      this.event = this.findEventById(this.eventId);
    });

    this.registrationForm = this.fb.group({
      conferencecode: ["", [Validators.required, Validators.maxLength(10)]],
      conferenceyear: ["", [Validators.required, Validators.maxLength(4)]],
      bankname: ["", [Validators.required, Validators.maxLength(20)]],
      remoteip: ["", [Validators.maxLength(15)]],
      regno: ["", [Validators.required, Validators.maxLength(20)]],
      candidatename: ["", [Validators.required, Validators.maxLength(80)]],
      nameinreceipt: ["", [Validators.required, Validators.maxLength(150)]],
      address1: ["", [Validators.maxLength(200)]],
      address2: ["", [Validators.maxLength(200)]],
      city: ["", [Validators.maxLength(100)]],
      state: ["", [Validators.maxLength(100)]],
      country: ["", [Validators.maxLength(100)]],
      pincode: ["", [Validators.maxLength(10)]],
      phone: ["", [Validators.required, Validators.maxLength(20)]],
      mobile: ["", [Validators.maxLength(20)]],
      email: ["", [Validators.maxLength(70)]],
      foodtype: ["", [Validators.maxLength(2)]],
      participanttype: ["", [Validators.maxLength(30)]],
      practicetype: ["", [Validators.maxLength(80)]],
      accompanymembers: ["", [Validators.maxLength(2)]],
      paymentamount: ["", [Validators.required]],
      ToWards: ["", [Validators.required, Validators.maxLength(200)]],
      Allow80G: ["N", [Validators.required]],
      PanCardNo: ["", [Validators.maxLength(10)]],
      hasgst: ["N", [Validators.required]],
      GSTReg: [""],
      gstnumber: ["", [Validators.maxLength(20)]],
      gstmobileno: ["", [Validators.maxLength(12)]],
      gstemailid: ["", [Validators.maxLength(100)]],

      inputcaption1: ["", [Validators.maxLength(50)]], //   isPaymentDone
      inputvalue1: ["", [Validators.maxLength(200)]], //   designation
      inputcaption2: ["", [Validators.maxLength(50)]], //   placeOfWork
      inputvalue2: ["", [Validators.maxLength(200)]], //   medicalCollegeName
      inputcaption3: ["", [Validators.maxLength(50)]], //   hospitalName
      inputvalue3: ["", [Validators.maxLength(200)]], //   istacMember
      inputcaption4: ["", [Validators.maxLength(50)]], //   istacMemberID
      inputvalue4: ["", [Validators.maxLength(200)]], //   registrationType
      inputcaption5: ["", [Validators.maxLength(50)]], //   submitCase
      inputvalue5: ["", [Validators.maxLength(200), Validators.required]], //

      isPaymentDone: ["N", Validators.required],
      designation: [""],
      placeOfWork: ["None"],
      medicalCollegeName: [""],
      hospitalName: [""],
      istacMember: ["No"],
      istacMemberID: [""],
      registrationType: ["", Validators.required],
      submitCase: ["No"],
    });

    // Set initial values for the form
    this.registrationForm.patchValue({
      conferencecode: this.event.code,
      conferenceyear: this.event.year,
      regno: this.generateRandomHash(7),
      Allow80G: "N",
      hasgst: "N",
    });

    this.registrationForm
      .get("nameinreceipt")
      .valueChanges.subscribe((newValue) => {
        console.log("Input value changed:", newValue);
        // You can perform actions here based on the new input value

        this.registrationForm.patchValue({
          candidatename: newValue,
        });
      });
  }

  findEventById(eventId): any {
    return this.events.find((event) => event.id == eventId);
  }

  generateRandomHash(length: number): string {
    const characters = "0123456789";
    let randomHash = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomHash += characters.charAt(randomIndex);
    }

    return randomHash;
  }

  calculateTotalPrice() {
    const registrationType = this.registrationForm.get('registrationType').value;
    const isCmcStaff = this.registrationForm.get('inputvalue5').value;

    if (isCmcStaff === 'CMCStaff') {
      // Exclude GST for CMC Staff
      if (registrationType === 'Online') {
        this.totalPrice = 500;
      } else if (registrationType === 'Symposium') {
        this.totalPrice = 1000;
      } else if (registrationType === 'Workshop') {
        this.totalPrice = 3500;
      } else if (registrationType === 'SymposiumAndWorkshop') {
        this.totalPrice = 4500;
      } else {
        this.totalPrice = 0;
      }
    } else {
      // Apply GST for External
      if (registrationType === 'Online') {
        this.totalPrice = 500 + (0.18 * 500); // ₹ 500 + 18% GST
      } else if (registrationType === 'Symposium') {
        this.totalPrice = 1000 + (0.18 * 1000); // ₹ 1000 + 18% GST
      } else if (registrationType === 'Workshop') {
        this.totalPrice = 3500 + (0.18 * 3500); // ₹ 3500 + 18% GST
      } else if (registrationType === 'SymposiumAndWorkshop') {
        this.totalPrice = 4500 + (0.18 * 4500); // ₹ 4500 + 18% GST
      } else {
        this.totalPrice = 0;
      }
    }
  

    this.registrationForm.patchValue({
      paymentamount: this.totalPrice,
      ToWards : registrationType,
  
    });
  }

  confirmData(): boolean {
    return confirm("Are you sure you want to proceed with the data?");
  }

  printPage() {
    window.print(); // Opens the browser's print dialog
  }

  getInvalidFields() {
    const invalidFields = [];

    Object.keys(this.registrationForm.controls).forEach((controlName) => {
      const control = this.registrationForm.get(controlName);

      if (control.invalid) {
        invalidFields.push(controlName);
      }
    });

    return invalidFields;
  }

 

  onSubmit() {
    const formData = this.registrationForm.value;

    (formData.inputcaption1 = formData.isPaymentDone),
      (formData.inputvalue1 = formData.designation),
      (formData.inputcaption2 = formData.placeOfWork),
      (formData.inputvalue2 = formData.medicalCollegeName),
      (formData.inputcaption3 = formData.hospitalName),
      (formData.inputvalue3 = formData.istacMember),
      (formData.inputcaption4 = formData.istacMemberID),
      (formData.inputvalue4 = formData.registrationType),
      (formData.inputcaption5 = formData.submitCase),
      // (formData.candidatename = formData.nameinreceipt);

      console.log("formData ", formData);
    setTimeout(() => {
      if (this.registrationForm.valid) {
        if (this.confirmData()) this.sendSOAPRequest(formData);
      } else {
        alert("Please fill out all required fields correctly.");
      }
    }, 500);
  }

  sendSOAPRequest(formData: any) {
    this.dataService.sendSOAPRequest(formData).subscribe(
      (res) => {
        this.handleSOAPResponse(res);
      },
      (error) => {
        this.handleSOAPError(error);
      }
    );
  }

  handleSOAPResponse(res: any) {
    console.log(res);
    this.paymentInfo = this.xmlParserService.parseXml(res);

    if (this.paymentInfo.ResultCode == "0") {
      const confData = {
        ...this.paymentInfo,
        ...this.registrationForm.value,
      };
      console.log("conf Data", confData);
      this.insertConferenceData(confData);
    }
  }

  handleSOAPError(error: any) {
    alert("Something went wrong " + error);
    console.error(error);
  }

  insertConferenceData(confData: any) {
    this.dataService.insertConferenceData(confData).subscribe(
      (response) => {
        console.log("Response from API:", response);
        // Handle the response from the API as needed
      },
      (error) => {
        console.error("Error:", error);
        // Handle errors
      }
    );
  }
}
