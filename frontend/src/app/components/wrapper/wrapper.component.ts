import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
    console.log('on init');
    // console.log(document.getElementById('first'));

  }

  ngAfterViewInit() {
    console.log('on after view init');




  }

  change(e) {
console.log('aaaa');
document.getElementById(e).scrollIntoView({behavior: 'smooth'});
  }

}
