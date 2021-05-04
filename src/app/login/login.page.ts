import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { cfaSignIn } from 'capacitor-firebase-auth';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private authService: AuthService,private router: Router) { }
  googleLogin() {
    this.authService.googleSignIn().subscribe(
      (user) => {
        console.log(
          user
            .getIdTokenResult()
            .then((res) => console.log("success" ,res.claims['../user/home']))            
            
        );
        this.router.navigate(['user/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  

  ngOnInit() {
  }

}
