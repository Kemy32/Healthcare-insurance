import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Arabic } from './ar';
import { English } from './en';

@Injectable({
  providedIn: 'root'
})

export class langHelper {

  public currentLang: any; // Language Code

  constructor(private router: Router) {
    if (localStorage.getItem("Language") === null) {
      //Set language
      localStorage.setItem("Language", "en")
      this.currentLang = 'en'
    }
    else {
      this.currentLang = localStorage.getItem("Language")
    }
  }

  ngOnInit() {
  }


  // Set translation variables
  initializeMode() {
    if (this.currentLang != null) {
      if (this.currentLang == 'en') {
        return English
      }
      else {
        return Arabic
      }
    }
    else {

      this.currentLang = 'en'

      return English

    }

  }

  switchLanguage() {
    this.currentLang == "ar" ? this.currentLang = "en" : this.currentLang = "ar"
    localStorage.setItem('Language', this.currentLang);
    console.log("Language Changed !");
  }
}
