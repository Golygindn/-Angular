import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class VacancyComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
  funct(){
  window.open('https://www.behance.net','_blank')
  }
}
