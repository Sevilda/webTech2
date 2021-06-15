import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sweet } from '../model/Sweet';
import { SweetsService } from '../service/sweets-service.service';

@Component({
  selector: 'app-sweets-form',
  templateUrl: './sweets-form.component.html',
  styleUrls: ['./sweets-form.component.css']
})
export class SweetsFormComponent implements OnInit {

  types: any[] = ["Candy", "Chocolate", "Cookie", "Hot drink", "Syrup"];
  sweets: Sweet[];

  constructor(public sweetsService: SweetsService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  async ngOnInit() {
    this.sweets = await this.sweetsService.getAllSweets();
  }

  sweetForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    amount: ['', Validators.min(1)],
    price: ['', Validators.min(1)],
    type: ['', Validators.required]
  });

  addSweet() {

    var sweet = this.sweetForm.value;
    var exists = false;

    console.log(sweet);

    this.sweets.forEach(s => {
      if (s.name === sweet.name) {
        exists = true;
      }
      console.log(exists);

    });

    if (!exists) {
      try {
      this.sweetsService.newSweet(sweet);
      alert("Saved " + sweet.name);
      this.router.navigateByUrl("/");
      }
      catch(err) {
        console.log(err);
      }
      this.sweetForm.reset();
    }
    else alert("A sweet with this name already exists!");

  }

}
