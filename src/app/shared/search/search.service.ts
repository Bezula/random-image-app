import { Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchControl = this.formBuilder.control('');
  valueChanges$ = this.searchControl.valueChanges;

  constructor(private formBuilder: NonNullableFormBuilder) {}
}
