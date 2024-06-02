import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../../models/weather-data';
import { BehaviorSubject, Subscription } from 'rxjs';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  template: `
    <button (click)="downloadAndUseFile()">Descargar y usar archivo</button>
    <div>{{ fileContent }}</div>
  `,
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit{

  fileContent: string = '';
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.downloadFile().subscribe((blob) => {const reader = new FileReader();
    reader.onload = () => {
      this.fileContent = reader.result as string;
      console.log(this.fileContent);
    };
      reader.readAsText(blob);
    });
  }


}
