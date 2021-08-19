import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  @ViewChild("userForm") userForm: NgForm;

  formSubmitted = false;

  user = {
    username: "",
    email: "",
    selectedGender: "male",
    selectedLanguage: "",
    secretQuestion: {
      question: "team",
      answer: ""
    }
  }

  genders = ['male', 'female'];
  languages = ['arabic', 'english', 'german'];

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

    this.formSubmitted = true;

    this.user.username = this.userForm.value.userData.username;
    this.user.email = this.userForm.value.userData.email;
    this.user.selectedGender = this.userForm.value.userData.gender;
    this.user.selectedLanguage = this.userForm.value.userData.selectedLanguage;
    this.user.secretQuestion.question = this.userForm.value.secret;
    this.user.secretQuestion.answer = this.userForm.value.questionAnswer;

    this.userForm.reset();
  }

}
