import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  // @ViewChild("userForm") userFor: NgForm;

  defaultQuestion = "team";
  answer: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  suggestName(): string {
    return "SuperName";
  }

  onSubmit(userForm: NgForm) {
    console.log(userForm);
  }

}
