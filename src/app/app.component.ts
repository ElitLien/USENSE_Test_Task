import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  sectionColors = ['gray', 'gray', 'gray'];

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
}
