import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  
  private url =
    "https://clin.cmcvellore.ac.in/newconference/ConferencePay.asmx";
  prod_cred = {
    userName: "UMRCETS",
    password: "us8FaGH5",
    program: "TSURCME",
  };

  private test_url =
    "https://clin.cmcvellore.ac.in/TestConference/ConferencePay.asmx";
  test_cred = {
    userName: "UMRESTC",
    password: "zEVjHc9Y",
    program: "TSURCME",
  };

  constructor(private httpClient: HttpClient) {}

  // Method to send the SOAP request
  sendSOAPRequest(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "text/xml; charset=utf-8",
      SOAPAction: "http://www.cmch-vellore.edu/NEWCONFONLINEPAYSAVE",
    });

    const soapBody = this.generateSOAPBody(this.test_cred, formData);

    console.log(soapBody);

    return this.httpClient.post(this.test_url, soapBody, {
      headers,
      responseType: "text",
    });
  }

  // Generate the SOAP body from form data
  private generateSOAPBody(userDetails: any, formData: any): string {
    const soapXML = `
    <x:Envelope xmlns:x="http://schemas.xmlsoap.org/soap/envelope/" xmlns:www="http://www.cmch-vellore.edu/">
      <x:Header>
        <www:UserDetails>
        <www:userName>${userDetails.userName}</www:userName>
        <www:password>${userDetails.password}</www:password>
        <www:program>${userDetails.program}</www:program>
      </www:UserDetails>
      </x:Header>
      <x:Body>
        <www:NEWCONFONLINEPAYSAVE>
          ${this.generateFieldsXML(formData)}
        </www:NEWCONFONLINEPAYSAVE>
      </x:Body>
    </x:Envelope>
  `;

    return soapXML;
  }

  // Generate the fields in SOAP XML format from form data
  private generateFieldsXML(formData: any): string {
    let fieldsXML = "";

    // Iterate through form data and generate XML for each field
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        fieldsXML += `<www:${key}>${formData[key]}</www:${key}>`;
      }
    }

    return fieldsXML;
  }

  events = [
    {
      id: 1,
      code: "TSURCME",
      year: "2023",
      subject: "Symposium on ",
      title: " Advance in Chest Trauma Management",
      date: "13 & 14 October, 2023",
      venue: [
        {
          title: "Symposium (Hybrid/ In person) ",
          date: "13.10.2023",
          address: "Conference Hall 7th floor, Cmc vellore Ranipet campus",
        },
        {
          title: "Cadaveric Workshop ",
          date: "14.10.2023",
          address: "Antomy Dissection Hall, Cmc vellore bagayam campus",
          info: "Limited seats & in person only",
        },
      ],
      highlights: [
        "Keynote lectures by eminent national and international faculty",
        "Sessions oriented towards understanding the intricacies of multidisciplinary care that is needed in the management of chest trauma patients. ",
        "Challenging cases discussions ",
        "Specific focus on intercostal drainage, minimally invasive chest surgery in trauma, thoracic rib fixation, pain relief medications in trauma and critical care management.",
        "Hands-on cadaveric training on the basic principles of surgical rib fixation",
      ],
      orgnisers: [
        "Dr. Sukria Nayak - Organising Chairperson",
        "Dr. Joses Dany James- Convener ",
        "Dr. Vijayan P -Convener",
        "Dr. Srujan Lam Sharma -Convener",
        "Ms. Nithya.A- Manager",
        "Mr. Prabhu - Manager",
      ],

      fee: [
        { desc: "Online (ISTAC Members only) - ₹500", cost: 500 },
        { desc: "Symposium In-person  - ₹1000", cost: 1000 },
        { desc: "Workshop (Only)  - ₹3500", cost: 3500 },
        { desc: "Symposium & Workshop ₹4500 - (+18% GST)", cost: 5310 },
      ],

      phone: "04172 – 224627 ",
      email: "traumasurg.academic@cmcvellore.ac.in",
      isActive: true,
    },
  ];
}
