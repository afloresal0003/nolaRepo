import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-right-of-the-day',
  templateUrl: './right-of-the-day.page.html',
  styleUrls: ['./right-of-the-day.page.scss'],
})
export class RightOfTheDayPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  navigateHome(){
    this.router.navigate(['folder/:id']);

  }
  ngOnInit() {
  }

}
