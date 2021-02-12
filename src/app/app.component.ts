import { Component } from '@angular/core';
import {earn} from "../model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dash';
  data:Array<earn>=[
    {
      sub:"Earnings-monthly",
      num:"$40000"
    },
    {
      sub:"Earnings-Annually",
      num:"$215000"
    }
    ,{
      sub:"tasks",
      num:"50%"

    },
    {
      sub:"Pending requests",
      num:"18"
    }
  ]
}
