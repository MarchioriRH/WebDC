import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { ContactComponent } from './components/contact/contact.component';
import { InformationComponent } from './components/information/information.component';
import { LoginComponent } from './admin/login/login.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'contact', component: ContactComponent },  
    { path: 'information', component: InformationComponent }, 
    { path: 'login', component: LoginComponent },    
];
