import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GlobalVars } from './global-vars';

@Injectable({
  providedIn: 'root',
})
export class ApiControllerService {

  constructor(private http: HttpClient) { }

  getTemp(latitude: number, longitude: number): Promise<any>{
    const post = this.http.post<any>(GlobalVars.WEATHER_URL_BASE + "getTemp", {lat: latitude, long: longitude});
    return post.toPromise()
  }

  getGithubRepos(): Promise<any[]>{
    const post = this.http.post<any[]>(GlobalVars.GITHUB_URL_BASE + "getRepos", {});
    return post.toPromise();
  }

  sendEmail(subject: string, content: string): Promise<string>{
    const send = this.http.post(GlobalVars.SG_URL_BASE + "sendMail", {subject: subject, content: content}, {responseType: 'text'});
    return send.toPromise();
  }

}
