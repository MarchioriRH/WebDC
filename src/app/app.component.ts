import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { NoticesComponent } from "./components/notices/notices.component";
import { InformationComponent } from "./components/information/information.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoginComponent } from './admin/login/login.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
              RouterOutlet,
              HeaderComponent, 
              NoticesComponent, 
              InformationComponent,
              FooterComponent, 
              ContactComponent,
              LoginComponent,
             ]
})
export class AppComponent {
  title = 'dc-app';
}
