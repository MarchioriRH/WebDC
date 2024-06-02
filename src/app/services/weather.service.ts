import { Injectable } from "@angular/core";
import { WeatherData } from "../models/weather-data";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const DATA_URL = 'https://ssl.smn.gob.ar/dpd/zipopendata.php?dato=tiepre';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  data : string = '';

  constructor(private http : HttpClient) { }
  downloadFile(): Observable<Blob> {
    return this.http.get(DATA_URL, { responseType: 'blob' });
  }
  
}
