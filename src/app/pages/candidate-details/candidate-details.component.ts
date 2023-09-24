import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})
export class CandidateDetailsComponent implements OnInit {

  rowData: any; // Data for the selected row

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Retrieve the data object from the route's state
    this.route.paramMap.subscribe(params => {
      const dataString = params.get('data');
      if (dataString) {
        this.rowData = JSON.parse(dataString);
      }
    });

  }

  }