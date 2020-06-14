import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

import { BmiService } from "../bmi.service";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Component({
  selector: "app-bmi",
  templateUrl: "./bmi.component.html",
  styleUrls: ["./bmi.component.css"]
})
export class BmiComponent implements OnInit {
  durationInSeconds = 1;
  result;
  bmiForm;

  constructor(
    private bmiService: BmiService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.bmiForm = this.formBuilder.group({
      weight: "",
      height: ""
    });
  }

  ngOnInit() {
  }

  onSubmit(data) {
    this.bmiService.getBmiResult(data.weight, data.height).subscribe(result => (this.result = result));
    this.bmiForm.reset();
  }
}
