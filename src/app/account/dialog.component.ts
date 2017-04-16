import { MdDialogRef } from '@angular/material';
import { Component, Input,ViewChild} from '@angular/core';
import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';
import { FormControl, FormGroup } from '@angular/forms';
import {MdCheckbox} from '@angular/material'
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods} from 'angularfire2';
import {Subject} from 'rxjs/Subject';

@Component({
    templateUrl: './dialog.html',

})
export class ConfirmDialog{

  public milestone: any;
  public af: AngularFire;
  public key: any;
  public noteUpdate: boolean = false;

  public userChecklist: FirebaseListObservable<any[]>;
    /*slider*/

 
  public rate: number;
  public isReadonly: boolean = false;
  public max: number = 10;
  public overStar: number;
  public percent: number;

 
  public hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = 10 * value;
  };
 
  public resetStar(): void {
    this.overStar = 0;
  }

  public clickOn(value: number): void {
    this.overStar = value;
    //this.rate = value;
    this.percent = 10 * value;
    this.milestone.progress = this.percent;
  };

@ViewChild('checkbox1') checkbox1: MdCheckbox;
@ViewChild('checkbox2') checkbox2: MdCheckbox;
@ViewChild('checkbox3') checkbox3: MdCheckbox;
@ViewChild('checkbox4') checkbox4: MdCheckbox;

  public updateNote(): void{

    this.noteUpdate  = true;
     console.log("noteUpdate = true")

  }

  public onOpenDialog(): void {
      this.rate = this.milestone.progress/10;
      this.overStar = this.milestone.progress/10;
      this.percent = this.milestone.progress;
  }

  ngOnInit(): void {
      this.onOpenDialog();
  }

  public openGame(gameLocation: string): void {
    window.location.href = gameLocation;
  }

  constructor(
    public dialogRef: MdDialogRef<ConfirmDialog>,
    ) { }
}
