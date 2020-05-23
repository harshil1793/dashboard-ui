import { Component, OnInit } from '@angular/core';

interface products {
  name: string;
  app: string;
  earnings: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  prodyctList: products[];
  constructor() {
    this.initializeProducts();
  }

  ngOnInit(): void {
  }

  initializeProducts() {
    this.prodyctList = [
      {
        name: 'Thefox 6 Template',
        app: 'Sketch App',
        earnings: 17.58
      },
      {
        name: 'Thefox 6 Template',
        app: 'Sketch App',
        earnings: 17.58
      },
      {
        name: 'Thefox 6 Template',
        app: 'Sketch App',
        earnings: 17.58
      },
      {
        name: 'Thefox 6 Template',
        app: 'Sketch App',
        earnings: 17.58
      }
    ]
  }
}
