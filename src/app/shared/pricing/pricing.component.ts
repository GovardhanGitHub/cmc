import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.scss"],
})

/**
 * Pricing component
 */
export class PricingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  events = [
    {
      subject : "Symposium on ",
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
      phone: "04172 – 224627 ",
      email: "traumasurg.academic@cmcvellore.ac.in",
      isActive: true,
    },
  ];
}
