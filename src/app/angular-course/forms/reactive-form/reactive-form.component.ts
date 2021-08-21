import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup;

  genders = ["male", "female"];

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'gender': new FormControl('male')
      }),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.userForm);
  }

  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.userForm.get('hobbies')).push(control);
  }

  getHobbiesControls() {
    return (this.userForm.get("hobbies") as FormArray).controls;
  }

}
