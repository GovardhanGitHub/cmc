import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})

/**
 * Pricing component
 */
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  events = [
    {
      title: 'Symposium on Advanced Chest Trauma treatment',
      date: '13 & 14 October 2023',
      venue:
        [{ title: 'Symposium (Hybrid/ In person) ', date: '13.10.2023', address: 'Conference Hall 7th floor, Cmc vellore Ranipet campus' },
        { title: 'Cadaveric Workshop ', date: '14.10.2023', address: 'Antomy Dissection Hall, Cmc vellore bagayam campus', info: 'Limited seats & in person only' }
        ],
      highlights: ['abc','dcd'],
      orgnisers: [
        "Dr. Sukria. Nayak - Organising Chairperson ",
        "Dr. Joses Dany James - Convener",
        "Dr vijayan P - convener",
        "Dr srujan lum sharma - convener",
        "Ms nitya - manager",
        "Dr. Vijayan P - Corwener ",
        "Mr. Prabhu - Manager",
      ],
      email : '04172 – 224627 ',
      phone : 'traumasurg.academic@cmcvellore.ac.in',
      isActive: true
    },
   
  ]

}
