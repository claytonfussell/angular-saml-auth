import { Component, OnInit } from '@angular/core';
import {SsoService} from '../services/sso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  email = null;
  resp = null;
  data;
  token = null;

  logoutRequest;
  
  
  constructor(
    private ssoService: SsoService,
    private route: ActivatedRoute
  ) { 
    this.logoutRequest = this.ssoService.logout();
    this.data = this.ssoService.getData();
  }

  logout() {
    this.logoutRequest.subscribe(res => {
      console.log(res);
    })
  }

  RedirectToLogin() {
    window.location.replace('http://localhost:1337/login');
  }


  ngOnInit(): void {

    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.token = params.token;
      console.log(this.token);
    }
  );

    this.data.subscribe(
      (res) => {
      console.log(res.user);
      if (res.user.nameID)
        {
            this.email = res.user.nameID;
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
