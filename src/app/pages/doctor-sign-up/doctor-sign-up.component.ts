import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-sign-up-one',
  templateUrl: './doctor-sign-up.component.html',
  styleUrls: ['./doctor-sign-up.component.scss']
})
export class DoctorSignUpComponent implements OnInit {

  /*file upload*/
  ImageUploadDoctor: '';
  /*Submit btn*/
  SubmitDoctor: '';

  /*text*/
  FirstNameDoctor: '';
  MiddleNameDoctor: '';
  LastNameDoctor: '';

  /*date*/
  BirthdateDoctor: '';
  /*radio*/
  MaleGenderDoctor: '';
  FemaleGenderDoctor: '';

  /*Email*/
  EmailDoctor: '';
  /*Number */
  NumberDoctor: '';
  /*Password*/
  PasswordDoctor: '';

  /*Select*/
  TitleDoctor: '';
  SpecialistDoctor: '';
  SpecializationsOfSpecialistDoctor: '';
  InsuranceCompanies: '';
  
  /*Number */
  YOEDoctor: '';

  /*Text*/
  ClinicNameDoctor: '';
  
  /*Select*/
  City: '';
  Area: '';
  
  /*Text*/
  LocationDoctor: '';

  /*Number*/
  FeesDoctor: '';
  AVGWaitingTimeDoctor: '';

  /*CheckBox*/
  SundayDoctor: '';
  /*Time*/
  SundayFromTimeDoctor: '';
  /*Time*/
  SundayToTimeDoctor: '';
  /*Number*/
  SundayBookingTimeDoctor: '';

  MondayDoctor: '';
  MondayFromTimeDoctor: '';
  MondayToTimeDoctor: '';
  MondayBookingTimeDoctor: '';

  TuesdayDoctor: '';
  TuesdayFromTimeDoctor: '';
  TuesdayToTimeDoctor: '';
  TuesdayBookingTimeDoctor: '';

  WednesdayDoctor: '';
  WednesdayFromTimeDoctor: '';
  WednesdayToTimeDoctor: '';
  WednesdayBookingTimeDoctor: '';

  ThursdayDoctor: '';
  ThursdayFromTimeDoctor: '';
  ThursdayToTimeDoctor: '';
  ThursdayBookingTimeDoctor: '';

  FridayDoctor: '';
  FridayFromTimeDoctor: '';
  FridayToTimeDoctor: '';
  FridayBookingTimeDoctor: '';

  SaturdayDoctor: '';
  SaturdayFromTimeDoctor: '';
  SaturdayToTimeDoctor: '';
  SaturdayBookingTimeDoctor: '';
  


  dates: Date[];
  rangeDates: Date[];
  minDate: Date;
  maxDate: Date;
  date1: Date;
  invalidDates: Array<Date>

  value: string;

  specialitySelected: string;
  gender: string;

  constructor() { }
  drSpecialty = [
    { name: 'Speciality1' },
    { name: 'Speciality2' },
    { name: 'Speciality3' },
    { name: 'Speciality4' },
  ];
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
