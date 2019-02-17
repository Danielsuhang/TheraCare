import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';



import {MatIconModule} from '@angular/material/icon';
import 'hammerjs/hammer';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';


//npm install angular-firebase --save
import {FirebaseModule, FirebaseProvider} from 'angular-firebase';


@NgModule({
  declarations: [
    AppComponent,
    CourseDialogComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule,
    MatButtonModule, MatCheckboxModule, MatSelectModule,
    MatFormFieldModule, MatInputModule, MatSliderModule, MatToolbarModule
    , MatDialogModule, MatStepperModule, ReactiveFormsModule, MatIconModule,
    MatSnackBarModule, MatRadioModule, MatListModule, MatDividerModule, FirebaseModule
  ],
  entryComponents: [CourseDialogComponent],
  providers: [FirebaseProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
