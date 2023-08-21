import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

/**
 * Check if control value is inferior to date in parameter
 * @export
 */
export function rangeDateValidator(minYear: number, maxYear: number) {
  return (control: FormControl) => {
    const year = control.value;
    const currentYear = new Date().getFullYear();

    if (year < minYear || year > maxYear) {
      return { min: { minYear, maxYear } };
    }

    return null;
  };
}
