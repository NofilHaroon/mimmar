import { Component, OnInit } from '@angular/core';
// import { TestService, Info_service} from '../test.service';
import{ SharedService, listing_service } from 'src/app/shared.service';
// import {ListingtestService, listing_service} from '../listingtest.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  info : listing_service = { ListingId: 1,
    Title: "string",
    Category: "string",
    Description: "string",
    Rating: 1,
    Thumbnail: "string",
    Img_one: "string",    
    Img_two: "string",
    Img_three: "string",
  };
    
  constructor(private test_service: SharedService) { }

  ngOnInit(): void {
    this.info = this.test_service.get_info();
  }

}
