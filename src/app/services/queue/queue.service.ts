import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(
    public http: HttpClient
  ) { }
  private authorizationHeader() {
    const token = window.localStorage.getItem('http://13.229.103.246@token');
    // console.log(token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }
  getQueue(body) {
    return this.http.post(environment.apiURL + '/api/queue-detail', body).toPromise();
  }
  saveQueue(body) {
    return this.http.post(environment.apiURL + '/api/queues', body, { headers: this.authorizationHeader() }).toPromise();
  }
}
