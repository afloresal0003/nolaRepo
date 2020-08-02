import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.page.html',
  styleUrls: ['./categories-page.page.scss'],
})
export class CategoriesPagePage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  navigateL1Q1(){
    this.router.navigate(['/levelOnequestion1']);
  }
  navigateL2Q1(){
    this.router.navigate(['/levelTwoquestion1']);
  }
  navigateL3Q1(){
    this.router.navigate(['/levelThreequestion1']);
  }
  navigateHome(){
    this.router.navigate(['/folder/:id']);
  }
  ngOnInit() {
  }

}
