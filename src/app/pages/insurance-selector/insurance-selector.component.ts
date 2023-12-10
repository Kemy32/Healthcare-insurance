import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-selector',
  templateUrl: './insurance-selector.component.html',
  styleUrls: ['./insurance-selector.component.scss']
})
export class InsuranceSelectorComponent implements OnInit {

  /*Select*/
  InsuranceCompanies: '';
  
  /*Select*/
  PaymentFrequency: '';
  
  /*Range (number)*/
  PremiumRange: '';
  DeductibleRange: '';
  
  /*CheckBox*/
  Inpatient: '';
  Outpatient: '';
  Dental: '';
  Optical: '';
  Chronic: '';
  WellBeing: '';
  EmergencyEvacuation: '';
  EmergencyRepatration: '';

  /*Submit Btn (search)*/
  SubmitInsuarnceSearch: '';
  

  constructor() { }

  ngOnInit(): void {
  }

}
