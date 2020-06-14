import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BmiService {
  constructor(private http: HttpClient) {}

  getBmiResult(weight, height) {
    console.warn("getBmiResult", weight, height);

    return this.http.get("https://cors-anywhere.herokuapp.com/https://bmi-shoohei.an.r.appspot.com/bmi", {
      responseType: "text",
      observe: 'body',
      params: {
        weight: weight,
        height: height
      }
    });
  }
}
