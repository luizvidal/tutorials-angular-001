import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-custom-validators',
  templateUrl: './custom-validators.component.html',
  styleUrls: ['./custom-validators.component.scss']
})
export class CustomValidatorsComponent implements OnInit {

  form = this.getForm()

  constructor(
    private formBuilder: FormBuilder
  ) { }
  
  ngOnInit(): void {
  }

  getForm() {
    return this.formBuilder.group({
      username: ['', [Validators.required, CustomValidators.noSpaceValidator]],
      password: ['', [Validators.required]],
    })
  }

  get form_controls() {
    return this.form.controls;
  }
}
