import { Component, OnInit } from '@angular/core';
import { Sweet } from '../model/Sweet';
import { SweetsService } from '../service/sweets-service.service';

@Component({
  selector: 'app-sweets-listing',
  templateUrl: './sweets-listing.component.html',
  styleUrls: ['./sweets-listing.component.css']
})
export class SweetsListingComponent implements OnInit {

  constructor(private sweetsService:SweetsService) { }

  sweets: Sweet[]; 

  async ngOnInit(): Promise<void> {
    this.sweets= (await this.sweetsService.getAllSweets());
  }

}
