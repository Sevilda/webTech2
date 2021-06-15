import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sweet } from 'src/app/model/Sweet';
import { SweetsService } from 'src/app/service/sweets-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public sweetsService:SweetsService , public formBuilder: FormBuilder) { }

  @Input() sweet: Sweet;

  ngOnInit(): void {
    this.orderForm.patchValue({"amount": this.sweet.amount});
  }

  
  orderForm: FormGroup = this.formBuilder.group({
    amount: ['', Validators.min(1)],
  });


  modify() {
    if( confirm("Are you sure you want to modify the amount of " + this.sweet.name + " to " + this.sweet.amount + "?"))
    { this.sweet.amount=this.orderForm.value.amount;
      this.sweetsService.updateSweet(this.sweet);
    }
  }

}
