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

  // Displays whether or not an answer is right or wrong
  showColor(color, num){
    const qResult1 = document.getElementById('Q5result1');
    const qResult2 = document.getElementById('Q5result2');
    const qHint2 = document.getElementById('Q5hint2');
    const qResult3 = document.getElementById('Q5result3');
    const qHint3 = document.getElementById('Q5hint3');
    const qResult4 = document.getElementById('Q5result4');
    const qHint4 = document.getElementById('Q5hint4');
    const nextB = document.getElementById('nextButton5');
    const emoji = document.getElementById('emoji5');
    const message = document.getElementById('message5');
    const preUpdate = document.getElementById('numberTroph5');
    const postUpdate = document.getElementById('trophUpdate5');

    if (color === 'green'){
      qResult1.style.display = 'block';
      qResult2.style.display = 'block';
      qHint2.style.display = 'none';
      qResult3.style.display = 'block';
      qHint3.style.display = 'none';
      qResult4.style.display = 'block';
      qHint4.style.display = 'none';
      nextB.style.display = 'block';
      emoji.style.display = 'block';
      message.style.display = 'block';
      preUpdate.style.display = 'none';
      postUpdate.style.display = 'block';
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
    const qContainer1 = document.getElementById('Q5answer1');
    const qResult1 = document.getElementById('Q5result1');
    const qContainer2 = document.getElementById('Q5answer2');
    const qResult2 = document.getElementById('Q5result2');
    const qHint2 = document.getElementById('Q5hint2');
    const qContainer3 = document.getElementById('Q5answer3');
    const qResult3 = document.getElementById('Q5result3');
    const qHint3 = document.getElementById('Q5hint3');
    const qContainer4 = document.getElementById('Q5answer4');
    const qResult4 = document.getElementById('Q5result4');
    const qHint4 = document.getElementById('Q5hint4');
    const nextB = document.getElementById('nextButton5');
    const emoji = document.getElementById('emoji5');
    const message = document.getElementById('message5');

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
      emoji.style.display = 'none';
      message.style.display = 'none';
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
