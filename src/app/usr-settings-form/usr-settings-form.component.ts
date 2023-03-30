import { Observable } from 'rxjs';
import { DataService } from './../data/data.service';
import { UserSettings } from './../data/user-settings';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-usr-settings-form',
  templateUrl: './usr-settings-form.component.html',
  styleUrls: ['./usr-settings-form.component.css'],
})
export class UsrSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: '',
    emailOffers: false,
    interfaceStyle: '',
    subscriptionType: '',
    notes: '',
  };
  // kad dirbtu ne su originaliais duomenimis, o su kopija
  userSettings: UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes!: Observable<string[]>;
  singleModel = 'On';
  startDate!: Date;
  startTime!: Date;
  maxRating: number = 10;
  userRating: number = 0;
  isReadonly!: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes()
    this.startDate = new Date();
    this.startTime = new Date();
  }

  

  onSubmit(form: NgForm): void {
    console.log('in onSubmit: ', form.value);

    // if(form.valid) {
    //   this.dataService.postUserSettingsForm(this.userSettings).subscribe(
    //   (result) => console.log('success', result),
    //   (error) => this.onHttpError(error)
    // );
    // } else {
    //   this.postError = true;
    //   this.postErrorMessage = 'Please fix the above errors'
    // }
    
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onHttpError(errorResponse: any) {
    console.log('error', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }
}
