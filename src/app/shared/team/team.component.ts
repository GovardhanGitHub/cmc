import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"],
})

/**
 * Team component
 */
export class TeamComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  team = [
    {
      image : 'sukria.png',
      name: "Dr. Sukria Nayak",
      dept: "Head, Department of Trauma Surgery, CMC Vellore",
    },

    {
      name: "Dr. Vijayan P",
      dept: " Department of Trauma Surgery, CMC Vellore",
    },

    {
      name: "Dr. Joses Dany James",
      dept: " Assistant Professor, Department of Trauma Surgery, CMC Vellore",
    },

    {
      image : 'srujan.png',
      name: "Dr. Srujan Lam Sharma",
      dept: " Assistant Professor, Department of Trauma Surgery, CMC, Vellore",
    },
  ]
  teama= [
    {
      image : 'sukria.png',
      name: "Dr. Sukria Nayak",
      dept: "Head, Department of Trauma Surgery, CMC Vellore",
    },
    {
      image : 'amit.png',
      name: "Dr. Amit Gupta",
      dept: "Professor, Division of Trauma Surgery, JPNATC, AIIMS, New Delhi",
    },
    {
      name: "Dr. Kirthi Sathyakumar",
      dept: " Associate Professor, Emergency Radiology, CMC, Vellore",
    },
    {
      image : 'subodh.png',
      name: "Dr. Subodh Kumar",
      dept: "Professor, Division of Trauma Surgery, JPNATC, AIIMS, New Delhi",
    },
    {
      name: "Dr. Santhosh R Benjamin",
      dept: " Associate Professor, Department of Cardiothoracic Surgery, CMC Vellore",
    },
    {
      image : 'kajal.png',
      name: "Dr. Kajal Jain",
      dept: "Professor, Department of Anaesthesia, PGIMER, Chandigarh",
    },
    {
      name: "Dr. Raghu",
      dept: "Professor, Division of Trauma and Acute Care Surgery, University Hospital, Michigan Medicine, Ann Arbor",
    },
    {
      name: "Dr. Vinay M Rao",
      dept: " Assistant Professor, Department of Cardiothoracic Surgery, CMC Vellore",
    },
    {
      name: "Dr. Niladri Banerjee",
      dept: " Assistant Professor, Department of Surgery, AIIMS, Jodhpur",
    },
    {
      name: "Dr. Susheel Sudheesh",
      dept: " Assistant Professor, Department of Anaesthesia, CMC Vellore",
    },
    {
      image : 'srujan.png',
      name: "Dr. Srujan Lam Sharma",
      dept: " Assistant Professor, Department of Trauma Surgery, CMC, Vellore",
    },
    {
      image : 'vignesh.png',
      name: "Dr. Vignesh Kumar",
      dept: " Associate Professor, PIMS, Puducherry ",
    },
    {
      name: "Dr. Joses Dany James",
      dept: " Assistant Professor, Department of Trauma Surgery, CMC Vellore",
    },
  ];
}
