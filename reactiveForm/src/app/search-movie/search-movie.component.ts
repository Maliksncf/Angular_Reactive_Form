import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isRequiredValidator } from '../models/is-required.validator';
import { rangeDateValidator } from '../models/range-date.validator';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  searchForm = this.fb.group(
    {
      identifier: ['', Validators.required],
      title: ['', Validators.required],
      type: ['series'],
      releaseYear: ['', [
        Validators.required,
        rangeDateValidator(1900, new Date().getFullYear())
      ]
      ],
      form: ['short']
    },
    { validators: isRequiredValidator('identifier', 'title') }
  );


  constructor(private fb: FormBuilder) { }

  subscribeToControlChanges() {
    this.searchForm.controls['identifier'].valueChanges.subscribe(value => {
      console.log('Identifier value changed:', value);
    }
  }

  ngOnInit() {
    this.subscribeToControlChanges();
  }

  onSubmit() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
    }
  }
}
