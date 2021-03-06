import { environment } from './../../../environments/environment';
import { UserService } from './user.service';
import { Witness } from './../models/witness';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WitnessService {
  static URL = environment.url + '/witness';
  constructor(private http: HttpClient,
              private userService: UserService) { }

  getAllWitness(): Observable<Witness[]> {
    return this.http.get<Witness[]>(WitnessService.URL);
  }
  getValidedWitness(): Observable<Witness[]> {
    return this.http.get<Witness[]>(WitnessService.URL + `/validated`);
  }
  createWitness(witness: Witness): Observable<any> {
    witness.status = false;
    witness.user_id = this.userService.user.id;
    console.log(witness);
    return this.http.post(WitnessService.URL , witness);
  }
  modifyWitness(witness: Witness): Observable<any> {
    return this.http.put(WitnessService.URL + `/${witness.id}`, {status: witness.status});
  }
  deleteWitness(id: number ): Observable<any> {
    console.log('delete id: ' + id);
    return this.http.delete<Witness>(WitnessService.URL + `/${id}`);
  }
}
