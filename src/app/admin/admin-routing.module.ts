
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from  './register/register.component';
import { ForgotPasswordComponent } from  './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from  './verify-email/verify-email.component';
import { Routes } from '@angular/router';
import { EmployeeListComponent } from '../employees/employee-list/employee-list.component';

const routes: Routes = [
    {
        path: 'admin',
        component: EmployeeListComponent,

        children: [
            {path: 'login', component: LoginComponent},
            { path:  'register', component:  RegisterComponent },
            { path:  'forgot-password', component:  ForgotPasswordComponent },
            { path:  'verify-email', component:  VerifyEmailComponent }
        ]

    }
];