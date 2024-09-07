import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  // El formGoup es el padre, en este caso el form y los controles serian los hijos dentro de este elemento
  formLogin: FormGroup = new FormGroup({});
  constructor(private _authService: AuthService) { };
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formLogin = new FormGroup({
      email: new FormControl('',
        [Validators.required,
          Validators.email,
        ]
      ),
      password: new FormControl('',
        [ Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]),
    });
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this._authService.sendCredentials(email, password);
    // console.log(body);
  }

}
