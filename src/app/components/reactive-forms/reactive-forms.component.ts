import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  form = this.getForm()

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void { }

  getForm() {
    return this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      contactDetails: this.formBuilder.group({
        address: ['', Validators.required],
        shippingAddress: ['', Validators.required],
        contactNo: ['', Validators.required],
      }),
      skills: this.formBuilder.array([])
    })
  }

  addSkill(skill: HTMLInputElement) {
    const form = this.formBuilder.group({
      name: [skill.value],
      level: ['COMMON']
    })
    this.skills.push(form)
  }

  removeSkill(index: number) {
    this.skills.removeAt(index)
  }

  onSubmit() {
    if (this.form.valid) console.log(this.form.getRawValue())
  }

  get form_controls() {
    return this.form.controls;
  }

  get contact_details() {
    return this.form.controls['contactDetails'].controls;
  }

  get skills() {
    return this.form.get('skills') as FormArray
  }
}
