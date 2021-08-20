import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.css']
})
export class ContentItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url ="../../../../assets/t1.jfif";
  urlh ="../../../../assets/healthy.png";
  urlv = "../../../../assets/i.png";
  urluh="../../../../assets/unhealthy.png";
}
