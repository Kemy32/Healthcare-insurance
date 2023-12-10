import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { langHelper } from 'src/app/services/helpers-and-utilities/language-helper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  
  SpecialitySearch:'';
  City:'';
  Area:'';
  DoctorSearch:'';
  NurseSearch:'';
  MaleSearch:'';
  FemaleSearch:'';
  DoctorNurseNameSearch:'';

  
  langVar;
  constructor(public langHelper: langHelper, private router: Router) { 
    
  }

  ngOnInit(): void {
}
}