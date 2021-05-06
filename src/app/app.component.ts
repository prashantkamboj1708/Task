import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { NgForm } from '@angular/forms';
import { NEVER } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Task';
  public EmpName!: string;
  public EmpNo!: number;
  public  arr = [];

  submitData(){
    const val = {
      name: this.EmpName,
      no: this.EmpNo
    };

    this.arr.push(val);
  }

  deleteData(i: number){
    this.arr.splice(i , 1);
  }
}

