import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-well-done-end',
  templateUrl: './well-done-end.page.html',
  styleUrls: ['./well-done-end.page.scss'],
})
export class WellDoneEndPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  return2C(){
    this.router.navigate(['categories-page']);

  }
  returnHome(){
    this.router.navigate(['']);

  }
  ngOnInit() {
  }

}
