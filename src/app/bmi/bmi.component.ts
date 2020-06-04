import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { BmiService } from "../bmi.service";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Component({
  selector: "app-bmi",
  templateUrl: "./bmi.component.html",
  styleUrls: ["./bmi.component.css"]
})
export class BmiComponent implements OnInit {
  hello;
  bmiForm;

  constructor(
    private bmiService: BmiService,
    private formBuilder: FormBuilder
  ) {
    this.bmiForm = this.formBuilder.group({
      weight: "",
      height: ""
    });
  }

  ngOnInit() {
    this.bmiService.getHello().subscribe(result => (this.hello = result));
  }

  onSubmit(data) {
    this.bmiForm.reset();

    console.warn("Your data has been submitted", data);
  }
}
