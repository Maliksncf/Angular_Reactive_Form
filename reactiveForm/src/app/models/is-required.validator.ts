import { FormGroup, ValidatorFn } from '@angular/forms';

/**
 * Check if control value is inferior to date in parameter
 * @export
 */
export function isRequiredValidator(controlName1: string, controlName2: string) {
  return (formGroup: FormGroup) => {
    const control1 = formGroup.controls[controlName1];
    const control2 = formGroup.controls[controlName2];

    if (!control1.value && !control2.value) {
      control1.setErrors({ isRequired: true });
      control2.setErrors({ isRequired: true });
    } else {
      control1.setErrors(null);
      control2.setErrors(null);
    }
  };
}
