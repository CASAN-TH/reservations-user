import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  dataProfile: any;
  constructor() {

  }

  ionViewWillEnter(){
    let res: any = JSON.parse(window.localStorage.getItem(environment.apiURL + 'user'));
    this.dataProfile = res;
    console.log(res);
  }
  ngOnInit() {
    let res: any = JSON.parse(window.localStorage.getItem(environment.apiURL + 'user'));
    this.dataProfile = res;
    console.log(res);
  }

  logout(){
    window.localStorage.clear()
  }

}
