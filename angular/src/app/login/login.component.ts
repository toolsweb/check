import { Component, OnInit } from '@angular/core';
import { CheckService } from 'src/services/check.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private checkService: CheckService) { }

  ngOnInit() {
  }

  errorLogin:String;


  checkLogin(e)
  {
    console.log(e)
    this.checkService.checkLogin(e.target.value).subscribe((data)=>{
      console.log(data)
      if (data && data['error'])
      {
          this.errorLogin = data['error'];
      }

    })
  }
  clearLoginError()
  {
    console.log('clear')
    this.errorLogin = '';
  }
}
  