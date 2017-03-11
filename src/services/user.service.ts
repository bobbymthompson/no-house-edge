import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { User } from '../models/user'
import { Observable } from 'rxjs/Rx';
import { Config } from '../services/config.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private storage: Storage;

  constructor(public http: Http, private config: Config) {
    this.storage = new Storage();
  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.config.get('endPoint') + '/users')
      .map(response => {
        return response.json().map(data => {
          return new User().deserialize(data);
        });
      })
      .toPromise()
      .catch(this.handleError);

  }

  // getUsersX(): Observable<User[]> {
  //     return this.http.get('http://192.168.0.3:9000/users')
  //      .map(response => response.json())
  //      .map(({id, name}) => new User(id, name));
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}