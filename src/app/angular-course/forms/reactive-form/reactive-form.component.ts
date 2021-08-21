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
  forbiddenUserName = ["admin"];

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        // 'username': new FormControl(null, [Validators.required, this.checkForbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'gender': new FormControl('male')
      }),
      'hobbies': new FormArray([])
    });

    /// subscribe to form values changes
    // this.userForm.valueChanges.subscribe(
    //   (value) => {
    //     console.log(value);
    //   }
    // );

    /// subscribe to form status changes
    // this.userForm.statusChanges.subscribe(
    //   (status) => {
    //     console.log(status);
    //   }
    // );

    this.userForm.patchValue({
      'userData': {
        'username': 'user'
      }
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

  checkForbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserName.indexOf(control.value) !== -1) {
      return { "nameIsForbidden": true };
    }

    return { "nameIsForbidden": false };
  }

}
