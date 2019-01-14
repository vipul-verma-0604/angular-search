import {
  Injectable
} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  url = 'assets/data.json';
  url2 = 'assets/search.json';

  result = new Subject();
  constructor(private http: HttpClient) {}

  getDefault() {
    return this.http.get(this.url)
  }

  getResult(start, end) {
    let myHeaders = {
      "Content-Type": 'application/json',
      "auth-token": 'my-auth-token'
    };
    let myParams = {
      "start": start,
      "end": end
    }
    let options = {
      headers: myHeaders,
      params: myParams
    }
    this.http.get(this.url2, options ).subscribe(
      (resp) => {
        this.result.next(resp);
      }
    )
  }
  
}
