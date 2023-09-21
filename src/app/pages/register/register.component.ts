import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private dataService : DataService) { }

  eventId : string;
  event : any
  events = []

  ngOnInit() {

    this.events = this.dataService.events


    this.route.params.subscribe(params => {
      this.eventId = params['id']; // 'id' should match the route parameter name defined in your routing configuration
      this.event = this.findEventById(this.eventId);
    });

    this.registrationForm = this.fb.group({
      conferencecode: ['', [Validators.required, Validators.maxLength(10)]],
      conferenceyear: ['', [Validators.required, Validators.maxLength(4)]],
      bankname: ['', [Validators.required, Validators.maxLength(20)]],
      remoteip: ['', [Validators.maxLength(15)]],
      regno: ['', [Validators.required, Validators.maxLength(20)]],
      candidatename: ['', [Validators.required, Validators.maxLength(80)]],
      nameinreceipt: ['', [Validators.required, Validators.maxLength(150)]],
      address1: ['', [Validators.maxLength(200)]],
      address2: ['', [Validators.maxLength(200)]],
      city: ['', [Validators.maxLength(100)]],
      state: ['', [Validators.maxLength(100)]],
      country: ['', [Validators.maxLength(100)]],
      pincode: ['', [Validators.maxLength(10)]],
      phone: ['', [Validators.maxLength(20)]],
      mobile: ['', [Validators.maxLength(20)]],
      email: ['', [Validators.maxLength(70)]],
      foodtype: ['', [Validators.maxLength(2)]],
      participanttype: ['', [Validators.maxLength(30)]],
      practicetype: ['', [Validators.maxLength(80)]],
      accompanymembers: ['', [Validators.maxLength(2)]],
      paymentamount: ['', [Validators.required]],
      ToWards: ['', [Validators.required, Validators.maxLength(200)]],
      Allow80G: ['', [Validators.required]],
      PanCardNo: ['', [Validators.maxLength(10)]],
      hasgst: ['', [Validators.required]],
      GSTReg: [''],
      gstnumber: ['', [Validators.maxLength(20)]],
      gstmobileno: ['', [Validators.maxLength(12)]],
      gstemailid: ['', [Validators.maxLength(100)]],
      inputcaption1: ['', [Validators.maxLength(50)]],
      inputvalue1: ['', [Validators.maxLength(200)]],
      inputcaption2: ['', [Validators.maxLength(50)]],
      inputvalue2: ['', [Validators.maxLength(200)]],
      inputcaption3: ['', [Validators.maxLength(50)]],
      inputvalue3: ['', [Validators.maxLength(200)]],
      inputcaption4: ['', [Validators.maxLength(50)]],
      inputvalue4: ['', [Validators.maxLength(200)]],
      inputcaption5: ['', [Validators.maxLength(50)]],
      inputvalue5: ['', [Validators.maxLength(200)]],
    });


     // Set initial values for the form
     this.registrationForm.patchValue({
      conferencecode: this.event.code,
      conferenceyear: this.event.year,
      regno: this.generateRandomHash(6),
      Allow80G : 'N',
      hasgst : 'N'
    });
  }


  findEventById(eventId): any {
    return this.events.find(event => event.id == eventId);
  }

  generateRandomHash(length: number): string {
    const characters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
    let randomHash = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomHash += characters.charAt(randomIndex);
    }

    return randomHash;
  }


  onSubmit() {
    console.log(this.registrationForm.value);
    if (true) {
      // Form data is valid, handle submission here
      const formData = this.registrationForm.value;
      this.dataService.sendSOAPRequest(this.registrationForm.value).subscribe((res) => {
        console.log(res)
      })
    }
  }
}





