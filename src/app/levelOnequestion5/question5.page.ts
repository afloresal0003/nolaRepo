import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.page.html',
  styleUrls: ['./question5.page.scss'],
})
export class Question5Page implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  showColor(color){
    if (color === 'green'){
      let elem = document.getElementById('correct');
      let otherE = document.getElementById('Qcontainer1')
      let otherEE = document.getElementById('Qcontainer2')
      let otherEEE = document.getElementById('iconTroph')
      let otherEEEE = document.getElementById('centerThis')
      elem.style.display = 'block';
      otherE.style.display = 'none';
      otherEE.style.display = 'none';
      otherEEE.style.display = 'none';
      otherEEEE.style.display = 'none';
    }
    else{
      let elem = document.getElementById('wrong');
      elem.style.display = 'block';
      let otherE = document.getElementById('Qcontainer1')
      let otherEE = document.getElementById('Qcontainer2')
      let otherEEE = document.getElementById('iconTroph')
      let otherEEEE = document.getElementById('centerThis')
      otherE.style.display = 'none';
      otherEE.style.display = 'none';
      otherEEE.style.display = 'none';
      otherEEEE.style.display = 'none';
    }
  }
  hideColor(option){
    if (option ==='Continue'){
      let elem = document.getElementById('correct');
      let otherE = document.getElementById('Qcontainer1')
      let otherEE = document.getElementById('Qcontainer2')
      let otherEEE = document.getElementById('iconTroph')
      let otherEEEE = document.getElementById('centerThis')
      elem.style.display = 'none';
      otherE.style.display = 'block';
      otherEE.style.display = 'block';
      otherEEE.style.display = 'block';
      otherEEEE.style.display = 'block';
      this.router.navigate(['well-done-end']);
    }
    else{
      let elem = document.getElementById('wrong');
      let otherE = document.getElementById('Qcontainer1')
      let otherEE = document.getElementById('Qcontainer2')
      let otherEEE = document.getElementById('iconTroph')
      let otherEEEE = document.getElementById('centerThis')
      otherE.style.display = 'block';
      otherEE.style.display = 'block';
      otherEEE.style.display = 'block';
      otherEEEE.style.display = 'block';
      elem.style.display = 'none';
    }
  }
  ngOnInit() {
  }

}
