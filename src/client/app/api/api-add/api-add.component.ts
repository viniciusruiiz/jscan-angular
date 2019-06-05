import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-add',
  templateUrl: './api-add.component.html',
  styleUrls: ['./api-add.component.scss']
})
export class ApiAddComponent implements OnInit {

  //private _formBuilder: FormBuilder
  private _registerForm: FormGroup;

  constructor( private _fb: FormBuilder) { }

  ngOnInit() {
    this._registerForm = this._fb.group({
      name: ['', Validators.required, Validators.maxLength(16)],
      //description: ['', Validators.required],
      endpoint: ['', Validators.required]
    })
  }
}
