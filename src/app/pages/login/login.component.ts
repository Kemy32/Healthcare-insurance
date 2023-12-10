import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginEmail: '';
  LoginPassword: '';
  LoginBtn: '';



  constructor() { }

    ngOnInit(): void {
    }

  }
