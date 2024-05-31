import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  userProfile: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserProfile().subscribe(data => {
      this.userProfile = data;
    });
  }

  updateProfile() {
    this.userService.updateUserProfile(this.userProfile).subscribe(response => {
      console.log('Perfil actualizado', response);
    });
  }
}
