import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-sign-up',
  templateUrl: './patient-sign-up.component.html',
  styleUrls: ['./patient-sign-up.component.scss']
})
export class PatientSignUpComponent implements OnInit {

  ImageUploadPatient:'';
  SubmitPatient:'';
  
  FirstNamePatient:'';
  MiddleNamePatient:'';
  LastNamePatient:'';
  
  BirthdatePatient:'';
  MaleGenderPatient:'';
  FemaleGenderPatient:'';
  
  EmailPatient:'';
  NumberPatient:'';
  
  City:'';
  Area:'';
  LocationPatient:'';
  
  PasswordPatient:'';
  
  BloodType:'';
  ChronicDiseases:'';
  
  DrugAllergy:'';
  DrugAllergyDetails:'';
  FoodAllergy:'';
  FoodAllergyDetails:'';
  InsectAllergy:'';
  InsectAllergyDetails:'';
  LatexAllergy:'';
  LatexAllergyDetails:'';
  MoldAllergy:'';
  MoldAllergyDetails:'';
  PetAllergy:'';
  PetAllergyDetails:'';
  PollenAllergy:'';
  PollenAllergyDetails:'';
  
  FirstDoseType:'';
  FirstDoseDate:'';
  SecondDoseType:'';
  SecondDoseDate:'';
  ThirdDoseType:'';
  ThirdDoseDate:'';
  

  dates: Date[];
  rangeDates: Date[];
  minDate: Date;
  maxDate: Date;
  date1: Date;
  invalidDates: Array<Date>

  value: string;

  city: string;
  
  constructor() {
    
   }

  ngOnInit(): void {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }

}

