import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nurse-edit-profile',
  templateUrl: './nurse-edit-profile.component.html',
  styleUrls: ['./nurse-edit-profile.component.scss']
})
export class NurseEditProfileComponent implements OnInit {

/*File upload*/
ImageUploadNurse: '';
  
/*Submit btn*/
SubmitNurse: '';

/*Text*/
FirstNameNurse: '';
MiddleNameNurse: '';
LastNameNurse: '';

/*Date*/
BirthdateNurse: '';

/*Radio*/
MaleGenderNurse: '';
FemaleGenderNurse: '';

/*Email*/
EmailNurse: '';

/*Number*/
NumberNurse: '';

/*Passowrd*/
PasswordNurse: '';

/*Select*/
TitleNurse: '';
SpecialistNurse: '';

/*Number*/
YOENurse: '';

/*Select*/
City: '';
Area: '';

/*Number*/
FeesNurse: '';

/*CheckBox*/
MaleGenderWorkNurse: '';
FemaleGenderWorkNurse: '';

/*CheckBox*/
SundayNurse: '';
/*Time*/
SundayFromTimeNurse: '';
/*Time*/
SundayToTimeNurse: '';
/*Number*/
SundayBookingTimeNurse: '';

MondayNurse: '';
MondayFromTimeNurse: '';
MondayToTimeNurse: '';
MondayBookingTimeNurse: '';

TuesdayNurse: '';
TuesdayFromTimeNurse: '';
TuesdayToTimeNurse: '';
TuesdayBookingTimeNurse: '';

WednesdayNurse: '';
WednesdayFromTimeNurse: '';
WednesdayToTimeNurse: '';
WednesdayBookingTimeNurse: '';

ThursdayNurse: '';
ThursdayFromTimeNurse: '';
ThursdayToTimeNurse: '';
ThursdayBookingTimeNurse: '';

FridayNurse: '';
FridayFromTimeNurse: '';
FridayToTimeNurse: '';
FridayBookingTimeNurse: '';

SaturdayNurse: '';
SaturdayFromTimeNurse: '';
SaturdayToTimeNurse: '';
SaturdayBookingTimeNurse: '';

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
  nrSpecialty = [
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
