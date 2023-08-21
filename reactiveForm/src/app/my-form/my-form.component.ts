import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { minDateValidator } from '../models/min-date.validator';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  // declare all controls with validation rules
  orderForm = this.fb.group({

    title: ['', Validators.required],

    quantity: ['', [
      Validators.required,
      Validators.max(5)
    ]
    ],

    date: ['', Validators.required],

    contact: ['', [
      Validators.required,
      Validators.email
    ]
    ],

    payments: this.fb.array([]) // FormArray control
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    // get Observable from FormGroup
    this.orderForm.valueChanges

      // listen to value change
      .subscribe(value => {

        console.log('orderForm value changes : ', value);
      });
  }

  /**
   * Add new payment line to form
   */

  addPayments() {

    // create FormGroup with two FormControl
    const paymentForm = this.fb.group({
      date: ['', [Validators.required, minDateValidator]],
      amount: ['', Validators.required]
    });

    // parse abstract control to FormArray
    const payments = this.orderForm.get('payments') as FormArray;

    // add new FormGroup to control 'payments'
    payments.push(paymentForm);
  }

  /**
   * Getter for control 'payments'
   */
  get payments(): FormArray {

    // convert abstract control to FormArray
    return this.orderForm.get('payments') as FormArray;
  }

  /**
   * Trigger on form submit
   */
  onSubmit() {

    // Get form value as JSON object
    console.log('orderForm submitted : ', this.orderForm.value);
  }
}
