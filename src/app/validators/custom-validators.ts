import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  static noSpaceValidator(control: AbstractControl): ValidationErrors | null {
    let controlValue = control.value as string;
    
    if (controlValue.indexOf(' ') >= 0) {
      return { noSpaceValidator: true }
    }

    return null;
  }
}