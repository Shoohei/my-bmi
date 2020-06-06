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
  hello;
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
    // this.bmiService.getHello().subscribe(result => (this.hello = result));
  }

  onSubmit(data) {
    this.bmiForm.reset();

    console.warn("Your data has been submitted", data);

    this._snackBar.openFromComponent(PopupComponent, {
      duration: this.durationInSeconds * 1000,
      panelClass: 'center'
    });
  }
}

@Component({
  selector: "popup",
  templateUrl: "popup.html",
  styles: [
    `
      .popup {
        color: hotpink;
      }
    `
  ]
})
export class PopupComponent {}
