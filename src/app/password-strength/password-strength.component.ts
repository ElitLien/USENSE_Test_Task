import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordStrengthComponent),
    multi: true
  }],
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent implements ControlValueAccessor {
  password: string = '';
  sectionColors = ['gray', 'gray', 'gray'];

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.password = value;
    this.checkPasswordStrength();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  checkPasswordStrength() {
    if (!this.password) {
      this.sectionColors = ['gray', 'gray', 'gray'];
      return;
    }
    if (this.password.length < 8) {
      this.sectionColors = ['red', 'red', 'red'];
      return;
    }
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /\W|_/.test(this.password);
    if (hasLetters && hasNumbers && hasSymbols) {
      this.sectionColors = ['green', 'green', 'green'];
    } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
      this.sectionColors = ['yellow', 'yellow', 'gray'];
    } else {
      this.sectionColors = ['red', 'gray', 'gray'];
    }
  } 

  updatePassword(value: string) {
    this.password = value;
    this.checkPasswordStrength();
    this.onChange(this.password);
  }
}