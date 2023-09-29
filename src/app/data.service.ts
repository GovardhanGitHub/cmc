import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private url = "https://api.wrdpwd.com/soap/callWebService";
  // private url =
  //   "https://clin.CMCVellore.ac.in/newconference/ConferencePay.asmx";
  prod_cred = {
    userName: "UMRCETS",
    password: "us8FaGH5",
    program: "TSURCME",
  };

  private test_url =
    "https://clin.CMCVellore.ac.in/TestConference/ConferencePay.asmx";
  test_cred = {
    userName: "UMRESTC",
    password: "zEVjHc9Y",
    program: "TSURCME",
  };

  constructor(private httpClient: HttpClient) {}

  // Method to send the SOAP request
  sendSOAPRequestForStatus(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/soap+xml; charset=utf-8",
      SOAPAction: "http://www.cmch-vellore.edu/CONFONLINEPAYSTATUS",
    });

    const soapBody = this.generateSOAPBodyForStatus(this.prod_cred, formData);

    console.log(soapBody);

    return this.httpClient.post(this.url, soapBody, {
      headers,
      responseType: "text",
    });
  }



  // Method to send the SOAP request
  sendSOAPRequest(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/soap+xml; charset=utf-8",
      SOAPAction: "http://www.cmch-vellore.edu/NEWCONFONLINEPAYSAVE",
    });

    const soapBody = this.generateSOAPBody(this.prod_cred, formData);

    console.log(soapBody);

    return this.httpClient.post(this.url, soapBody, {
      headers,
      responseType: "text",
    });
  }

  // Generate the SOAP body from form data
  private generateSOAPBodyForStatus(userDetails: any, formData: any): string {

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
        <www:CONFONLINEPAYSTATUS>
          ${this.generateFieldsXML(formData)}
        </www:CONFONLINEPAYSTATUS>
      </x:Body>
    </x:Envelope>
  `;

    return soapXML;
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
      subject: "CME on ",
      title: " Advance in Chest Trauma Management ",
      subTitle : "ACTraM 2023",
      date: "13 & 14, October - 2023",
      venue: [
        {
          title: "Symposium (Hybrid/ In person) ",
          date: "13.10.2023",
          address: "Conference Hall 7th floor, A-Block, CMC Vellore Ranipet Campus",
        },
        {
          title: "Cadaveric Workshop ",
          date: "14.10.2023",
          address: "Antomy Dissection Hall, CMC Vellore Bagayam Campus",
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
        { desc: "Online (ISTAC Members only) - ₹500*", cost: 500 },
        { desc: "Symposium (In-person)  - ₹1000*", cost: 1000 },
        { desc: "Workshop (Only)  - ₹3500*", cost: 3500 },
        { desc: "Symposium & Workshop ₹4500*", cost: 5310 },
        { desc: "(+18% GST)*", cost: 5310 },
        
      ],

      phone: "04172 – 224627 ",
      email: "traumasurg.academic@cmcvellore.ac.in",
      isActive: true,
      doctors: [
        {
          name: "Dr. Amit Gupta",
          prof: "Professor",
          at: "Division of Trauma Surgery JPNATC, AIIMS New Delhi",
          id: 3,
          image: "3.jpg",
        },
        {
          name: "Dr. Subodh Kumar",
          prof: "Professor",
          at: "Division of Trauma Surgery,  JPNATC, AIIMS New Delhi",
          id: 2,
          image: "2.jpg",
        },
        {
          
          name: "Dr. Kajal Jain ",
          prof: "Professor",
          at: "Trauma Anaesthesia PGIMER, Chandigarh.",
          id: 1,
          image: "1.jpg",
        },
        {
          name: "Dr. Krishnan Raghavendran ",
          prof: "Professor",
          at: " Division of Trauma and Acute Care Surgery, University Hospital, Ann Arbor Hospital Michigan",
          id: 4,
          image: "4.jpg",
        },
        {
          name: "Dr. Balasubramoniam",
          at: "Consultant Thoracic Surgeon, Yashoda group of Hospitals, Hyderabad",
          id: 5,
          image: "5.jpg",
        },
        {
          name: "Dr. Niladri Banerjee",
          prof: "Assistant Professor",
          at: "Department of Surgery, AIIMS Jodhpur",
          id: 8,
          image: "8.jpg",
        },
        {
          name: "Dr. Sukria Nayak",
          prof: "Professor & Head",
          at: " Department of Trauma Surgery, CMC Vellore",
          id: 6,
          image: "6.jpg",
        },
        {
          name: "Dr. Ekta Rai",
          prof: "Professor ",
          at: "Department of Anesthesia,CMC Vellore",
          id: 16,
          image: "16.jpg",
        },
        {
          name: "Dr.Madhu Andrew Philip",
          at: "Prof & Head, Department of Cardiothoracic Surgery,CMC Vellore",
          id: 17,
          image: "17.jpg",
        },
        {
          name: "Dr. Balasubramani",
          prof: "Professor ",
          at: "Department of  Surgical ICU, CMC Vellore",
          id: 18,
          image: "18.jpg",
        },
        {
          name: "Dr. Susheel Sudheesh",
          prof: "Assistant Professor",
          at: "Department of Anaesthesia, CMC Vellore",
          id: 10,
          image: "10.jpg",
        },
        {
          name: "Dr. Srujan Lam Sharma",
          prof: "Assistant Professor",
          at: "Department of Trauma Surgery, CMC Vellore",
          id: 12,
          image: "12.jpg",
        },
        {
          name: "Dr. Vinay M Rao ",
          prof: "Associate Professor",
          at: "Department of Cardiothoracic, Surgery CMC Vellore",
          id: 7,
          image: "7.jpg",
        },
        {
          name: "Dr. Santhosh R Benjamin",
          prof: "Associate Professor",
          at: "Department of Cardiothoracic, Surgery,CMC Vellore",
          id: 9,
          image: "9.jpg",
        },
        {
          name: "Dr. Kirthi Sathyakumar ",
          prof: "Associate Professor",
          at: "Emergency Radiology, CMC Vellore",
          id: 11,
          image: "11.jpg",
        },
        {
          name: "Dr. Joses Dany James",
          prof: "Assistant Professor",
          at: "Department of Trauma Surgery, CMC Vellore",
          id: 14,
          image: "14.jpg",
        },
         {
          name: "Dr. Vijayan P",
          prof: "Associate Professor",
          at: "Department of Trauma Surgery, CMC Vellore",
          id: 13,
          image: "13.jpg",
        },
        {
          name: "Dr. Vignesh Kumar",
          prof: "Associate Professor",
          at: "Department of General Surgery, PIMS, Puducherry",
          id: 15,
          image: "15.jpg",
        },

      ],
    },
  ];

  getAllConferenceData(): Observable<any> {
    const url = "https://api.wrdpwd.com/soap/getAllConferenceData";
    return this.httpClient.get(url);
  }

  // Create a method to send data via POST request
  insertConferenceData(data: any): Observable<any> {
    const url = "https://api.wrdpwd.com/soap/insertConferenceData";
    // Define headers if needed (adjust as necessary)
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    // Send the POST request
    return this.httpClient.post(url, data, { headers });
  }

  // Create a method to send data via POST request
  updateConferenceData(id, data: any): Observable<any> {
    const url = "https://api.wrdpwd.com/soap/updateConferenceData/" + id;
    // Define headers if needed (adjust as necessary)
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    // Send the POST request
    return this.httpClient.put(url, data, { headers });
  }

  partialUpdateConferenceData(id, data: any): Observable<any> {
    const url = "https://api.wrdpwd.com/soap/partialUpdateConferenceData/" + id;
    // Define headers if needed (adjust as necessary)
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    // Send the POST request
    return this.httpClient.patch(url, data, { headers });
  }


  getConferenceDataByRegno(id){
    const url = "https://api.wrdpwd.com/soap/getConferenceDataByRegno/" + id;
    // Define headers if needed (adjust as necessary)
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    // Send the POST request
    return this.httpClient.get(url,  { headers });
  }
  

  getConferenceDataByPhone(id){
    const url = "https://api.wrdpwd.com/soap/getConferenceDataByPhone/" + id;
    // Define headers if needed (adjust as necessary)
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    // Send the POST request
    return this.httpClient.get(url,  { headers });
  }


  // Create a method to send data via POST request
  deleteConferenceData(id): Observable<any> {
    const url = "https://api.wrdpwd.com/soap/deleteConferenceData/" + id;
    // Define headers if needed (adjust as necessary)
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    // Send the POST request
    return this.httpClient.delete(url,  { headers });
  }


}

export class PaymentInfo {
  Registration: string;
  Transid: string;
  ResultCode: string;
  Result: string;
  URL: string;
}
