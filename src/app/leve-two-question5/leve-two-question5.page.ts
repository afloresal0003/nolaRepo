import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-leve-two-question5',
  templateUrl: './leve-two-question5.page.html',
  styleUrls: ['./leve-two-question5.page.scss'],
})
export class LeveTwoQuestion5Page implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  // Displays whether or not an answer is right or wrong
  showColor(color, num){
    const qResult1 = document.getElementById('Qresult1');
    const qResult2 = document.getElementById('Qresult2');
    const qHint2 = document.getElementById('Qhint2');
    const qResult3 = document.getElementById('Qresult3');
    const qHint3 = document.getElementById('Qhint3');
    const qResult4 = document.getElementById('Qresult4');
    const qHint4 = document.getElementById('Qhint4');
    const nextB = document.getElementById('nextButton');

    if (color === 'green'){
      qResult1.style.display = 'block';
      qResult2.style.display = 'block';
      qHint2.style.display = 'none';
      qResult3.style.display = 'block';
      qHint3.style.display = 'none';
      qResult4.style.display = 'block';
      qHint4.style.display = 'none';
      nextB.style.display = 'block';
    }
    if (color === 'red' && num === 2){
      qResult1.style.display = 'none';
      qResult2.style.display = 'block';
      qHint2.style.display = 'block';
      qResult3.style.display = 'none';
      qHint3.style.display = 'none';
      qResult4.style.display = 'none';
      qHint4.style.display = 'none';
      nextB.style.display = 'none';
    }
    if (color === 'red' && num === 3){
      qResult1.style.display = 'none';
      qResult2.style.display = 'none';
      qHint2.style.display = 'none';
      qResult3.style.display = 'block';
      qHint3.style.display = 'block';
      qResult4.style.display = 'none';
      qHint4.style.display = 'none';
      nextB.style.display = 'none';
    }
    if (color === 'red' && num === 4){
      qResult1.style.display = 'none';
      qResult2.style.display = 'none';
      qHint2.style.display = 'none';
      qResult3.style.display = 'none';
      qHint3.style.display = 'none';
      qResult4.style.display = 'block';
      qHint4.style.display = 'block';
      nextB.style.display = 'none';
    }
  }
  // Sets everything back to its default CSS style
  hideColor(option){
    const qContainer1 = document.getElementById('Qcontainer1');
    const qResult1 = document.getElementById('Qresult1');
    const qContainer2 = document.getElementById('Qcontainer2');
    const qResult2 = document.getElementById('Qresult2');
    const qHint2 = document.getElementById('Qhint2');
    const qContainer3 = document.getElementById('Qcontainer3');
    const qResult3 = document.getElementById('Qresult3');
    const qHint3 = document.getElementById('Qhint3');
    const qContainer4 = document.getElementById('Qcontainer4');
    const qResult4 = document.getElementById('Qresult4');
    const qHint4 = document.getElementById('Qhint4');
    const nextB = document.getElementById('nextButton');

    if (option === 'continue'){
      qContainer1.style.display = 'block';
      qResult1.style.display = 'none';
      qContainer2.style.display = 'block';
      qResult2.style.display = 'none';
      qHint2.style.display = 'none';
      qContainer3.style.display = 'block';
      qResult3.style.display = 'none';
      qHint3.style.display = 'none';
      qContainer4.style.display = 'block';
      qResult4.style.display = 'none';
      qHint4.style.display = 'none';
      nextB.style.display = 'none';
    }else{
      qContainer1.style.display = 'block';
      qResult1.style.display = 'none';
      qContainer2.style.display = 'block';
      qResult2.style.display = 'none';
      qHint2.style.display = 'none';
      qContainer3.style.display = 'block';
      qResult3.style.display = 'none';
      qHint3.style.display = 'none';
      qContainer4.style.display = 'block';
      qResult4.style.display = 'none';
      qHint4.style.display = 'none';
      nextB.style.display = 'none';
    }
  }
  // Goes to the categories page
  goCat(){
    this.router.navigate(['categories-page']);
  }
  // Goes to the next question
  nextPage(){
    this.router.navigate(['well-done-end']);
  }
  ngOnInit() {
  }

}
