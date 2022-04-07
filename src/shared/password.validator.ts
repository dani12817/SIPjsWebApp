import { FormGroup, ValidatorFn } from '@angular/forms';

export function PasswordValidator(controlName: string, matchingControlName: string): any {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ noMatchPassword: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}