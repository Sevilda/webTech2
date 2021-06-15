import { Component, Input, OnInit } from '@angular/core';
import { Sweet } from 'src/app/model/Sweet';
import { faCookieBite, faCandyCane, faGlassWhiskey, faMugHot, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
// cookie, candy, syrup, drink, chocolate

@Component({
  selector: 'app-sweet',
  templateUrl: './sweet.component.html',
  styleUrls: ['./sweet.component.css']
})
export class SweetComponent implements OnInit {

  @Input() sweet: Sweet;
  
  faCookieBite= faCookieBite;
  faCandyCane=faCandyCane;
  faGlassWhiskey=faGlassWhiskey;
  faMugHot= faMugHot;
  faSquare=faSquare;

  faPlus=faPlus;
  faMinus=faMinus;

  ordering=false;

  constructor() { }

  ngOnInit(): void {
  }

  enableOrder(){
    this.ordering=true;
  }

  disableOrder(){
    this.ordering=false;
  }


}
