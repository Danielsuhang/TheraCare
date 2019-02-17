import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

import { MatDialog } from '@angular/material';

import { CourseDialogComponent } from './course-dialog/course-dialog.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  symptoms: string;

  name: string = "";
  secondName: string = "";

  ageGroup: FormGroup;  //<4
  symptomsGroup: FormGroup;  //Misc -> Difficulty breathing, shortness of breath
  //Night Sweats, Asthma, Tubuciloisis, HIV
  lengthOfCough: FormGroup;  //Greater than 2 weeks
  coughSeverity: FormGroup;  


  constructor(private _formBuilder: FormBuilder
    , private snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngOnInit() {
    this.lengthOfCough = this._formBuilder.group({
      lengthCtrl: ['', Validators.required],
      oralCtrl: ['', Validators.required]
    });
    this.ageGroup = this._formBuilder.group({
      ageCtrl: ['', Validators.required]
    });
    this.symptomsGroup = this._formBuilder.group({
      breathing: ['', Validators.required],
      asthma: ['', Validators.required],
      COPD: ['', Validators.required],
      barkwhoop: ['', Validators.required],
    });
    
    this.coughSeverity = this._formBuilder.group({
      cough: ['', Validators.required],
      admin: ['', Validators.required]
    });

  }
  getName() {
    if (this.coughSeverity.controls.admin.value == 'loz') {
      this.name = "Ricola (menthol)";
    }
    else if (this.coughSeverity.controls.admin.value == 'oral') {
      this.name = "Delsym (dextromethorphan)";
      this.secondName = "Benadryl (Diphenhydramine)";
    }
    else if (this.coughSeverity.controls.admin.value == 'top') {
      this.name = "Vicks VapoRub";
    }
    else if (this.coughSeverity.controls.cough.value == 'wet') {
      this.name = "Mucinex (guaifenesin)";
      this.secondName = "Robitussin";
    }
  }
  lookAtCtrl() {
    console.log(this.lengthOfCough.controls.lengthCtrl.value)
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onSubmit() {
    this.getName();
    this.openDialog();
    this.lengthOfCough.reset();
    this.ageGroup.reset();
    this.symptomsGroup.reset();
    this.coughSeverity.reset();
    console.log("Submitted!")
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      data: {
        name: this.name,
        secondName: this.secondName
      }

    });

    dialogRef.afterClosed().subscribe(result => {
      
      console.log('The dialog was closed');
    });
  }
}
