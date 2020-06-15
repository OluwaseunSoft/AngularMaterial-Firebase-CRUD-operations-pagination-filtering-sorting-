
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from  './register/register.component';
import { ForgotPasswordComponent } from  './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from  './verify-email/verify-email.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'admin',

        children: [
            {path: 'login', component: LoginComponent},
            { path:  'register', component:  RegisterComponent },
            { path:  'forgot-password', component:  ForgotPasswordComponent },
            { path:  'verify-email', component:  VerifyEmailComponent }
        ]

    }
];

export const SappRoutingModule = RouterModule.forChild(routes);