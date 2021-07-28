import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.scss']
})
export class MailingComponent implements OnInit {

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public bodyFormControl = new FormControl('', [
    Validators.required,
  ])

  public matcher = new MyErrorStateMatcher();

  public get formsFilled(): boolean{
    return this.emailFormControl.hasError('email') || this.emailFormControl.hasError('required') || this.bodyFormControl.hasError('required');
  }

  constructor() { }

  ngOnInit(): void {
  }

  public getContent(): void {
    const email = (<HTMLInputElement>document.getElementById("email-address-area"))?.value;
    console.log(email);
    const body = (<HTMLTextAreaElement>document.getElementById('email-text-area')).value;
    console.log(body);
  }

}
