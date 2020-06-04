import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BmiService {
  constructor(private http: HttpClient) {}

  getHello() {
    return this.http.get("http://localhost:8080/hello", {
      responseType: "text",
      observe: 'response'
    });
  }
}
