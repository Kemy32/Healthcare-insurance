import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { langHelper } from 'src/app/services/helpers-and-utilities/language-helper';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( public langHelper: langHelper , private router: Router) {
  }

  ngOnInit(): void {
  }

}
