import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  @ViewChild("userForm") userForm: NgForm;

  genders = ['male', 'female'];
  selecetdGender = "male";

  languages = ['arabic', 'english', 'german'];

  defaultQuestion = "team";
  answer: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  suggestName() {
    const suggestedName = "SuperName";
    this.userForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(userForm: NgForm) {
    console.log(userForm);
  }

}
