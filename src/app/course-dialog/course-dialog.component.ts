import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {
  imageSrc: string = "../assets/img/notfound.jpg";
  imageSecondSrc: string = "";
  mapsSrc: string = "../assets/img/notfound.jpg";
  mapSecondSrc: string = "";
  drugFacts: string[] = []
  drugFactsTwo: string[] = [];
  cost: string[] = []
  costTwo: string[] = [];
  description: string;
  descriptionTwo: string;
  constructor(
    public dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }



  onNoClick(): void {

    //HARD RESET
    this.cost = [];
    this.drugFacts = [];
    this.descriptionTwo = "";
    this.description = "";
    this.drugFactsTwo = [];
    this.costTwo = [];
    this.imageSrc = "";
    this.mapsSrc = "";
    this.imageSecondSrc = ""
    this.mapSecondSrc = ""


    this.dialogRef.close();
  }
  processData() {
    if (this.data.name == "Ricola (menthol)") {
      this.imageSrc = "../assets/img/Ricola.png";
      this.mapsSrc = "../assets/img/Ricolap.jpg";
      this.imageSecondSrc = "";
      this.mapSecondSrc = ""
      this.description = "Medicated lozenges that helps suppress cough"
      this.drugFacts.push("Use for children older than 6 years old")
      this.drugFacts.push("May cause burning sensation in mouth")
      this.cost.push("Walgreens: $3.19")
      this.cost.push("Target: $2.99")
      this.cost.push("CVS: $2.99")
      this.cost.push("Harris Teeter: $3.99")

      
    }
    else if (this.data.name == "Delsym (dextromethorphan)") {
      this.imageSrc = "../assets/img/Delsym.png";
      this.mapsSrc = "../assets/img/delsymp.jpg";
      this.imageSecondSrc = "../assets/img/Benadryl.png";
      this.mapSecondSrc = "../assets/img/Benadrylp.jpg"
      this.description = "Medication used for temporary relief of coughs caused by minor throat and bronchial irritation"
      this.drugFacts.push("Use for children older than 6 years old")
      this.drugFacts.push("May cause burning sensation in mouth")
      this.cost.push("Walgreens: $13.19")
      this.cost.push("Target: $12.49")
      this.cost.push("CVS: $14.29")
      this.cost.push("Harris Teeter: $16.48")

      this.descriptionTwo = "Antihistamine used to relieve symptoms of cough from post-nasal drip";
      this.drugFactsTwo.push("Works in 15 minutes")
      this.drugFactsTwo.push("May cause drowsiness and other potential side effects")
      this.costTwo.push("Walgreens: $5.99")
      this.costTwo.push("Target: $4.49")
      this.costTwo.push("CVS: $4.89")
      this.costTwo.push("Harris Teeter: $5.99")
    }
    else if (this.data.name == "Vicks VapoRub") {
      this.imageSrc = "../assets/img/VapoRub.png";
      this.mapsSrc = "../assets/img/VaproRubp.jpg";
      this.imageSecondSrc = "";
      this.mapSecondSrc = ""

      this.description = "Topical cough medicine with medicated vapors"
      this.drugFacts.push("Starts working quickly for adults and children older than 2 years old to relieve cough symptoms")
      this.drugFacts.push("May cause skin irritation")
      this.cost.push("Walgreens: $3.19")
      this.cost.push("Target: $5.49")
      this.cost.push("CVS: $7.49")
      this.cost.push("Harris Teeter: $6.99")
    }
    else if (this.data.name == "Mucinex (guaifenesin)") {
      this.imageSrc = "../assets/img/Mucinex.png";
      this.mapsSrc = "../assets/img/Mucinexp.jpg";
      this.imageSecondSrc = "../assets/img/Robitussin.png";
      this.mapSecondSrc = "../assets/img/Robitussinp.jpg";

      this.description = "Used to treat congestion and cough"
      this.drugFacts.push("Thins mucus, making it easier to clear mucus from the head, throat, and lungs")
      this.drugFacts.push("Works for 12 hours")
      this.drugFacts.push("May cause nausea/vomiting, drowsiness, or headache")
      this.drugFacts.push("Use for adults and children older than 12 years old")
      this.cost.push("Walgreens: $13.99")
      this.cost.push("Target: $11.99")
      this.cost.push("CVS: $12.99")
      this.cost.push("Harris Teeter: $14.99")

      this.descriptionTwo = "Temporarily relieves cough due to minor throat and bronchial irritation";
      this.drugFactsTwo.push("Helps loosen mucus and secretions")
      this.drugFactsTwo.push("Use for adults and children older than 12 yo")
      this.costTwo.push("Walgreens: $8.69")
      this.costTwo.push("Target: $9.99")
      this.costTwo.push("CVS: $8.79")
      this.costTwo.push("Harris Teeter: $8.99")
    }
  }

  ngOnInit() {
    this.processData()
    console.log(this.data.name);
    console.log(this.data.secondName);
  }

}
