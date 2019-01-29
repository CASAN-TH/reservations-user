import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(
    public http: HttpClient
  ) { }
  getQueue(body) {
    return this.http.post(environment.apiURL + '/api/queue-detail', body).toPromise();
  }
}
