import { Component, OnInit } from '@angular/core';
import {SsoService} from '../services/sso.service';

@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.scss']
})
export class SsoComponent implements OnInit {

  email = null;
  setLoading = true;
  resp = null;
  data;

  constructor(
    private ssoService: SsoService
  ) {
    this.data = this.ssoService.getData();
   }

  RedirectToLogin() {
      window.location.replace('http://localhost:1337/login');
  }


  ngOnInit(): void {
    this.data.subscribe(
      (res) => {
      console.log(res.user.nameID);
      if (res.user.nameID)
        {
            this.email = res.user.nameID;
            this. setLoading = false;
            this.RedirectToLogin();
        }
        else
        {
            this.RedirectToLogin();    
        }
      },
      (error) => {
        this.RedirectToLogin(); 
      })
    }
}
