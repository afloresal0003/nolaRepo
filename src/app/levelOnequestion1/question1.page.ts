import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.page.html',
  styleUrls: ['./question1.page.scss'],
})
export class Question1Page implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  // Displays whether or not an answer is right or wrong
  showColor(color, num){
    const qResult1 = document.getElementById('Q1result1');
    const qResult2 = document.getElementById('Q1result2');
    const qHint2 = document.getElementById('Q1hint2');
    const qResult3 = document.getElementById('Q1result3');
    const qHint3 = document.getElementById('Q1hint3');
    const qResult4 = document.getElementById('Q1result4');
    const qHint4 = document.getElementById('Q1hint4');
    const nextB = document.getElementById('nextButton1');
    const emoji = document.getElementById('emoji1');
    const message = document.getElementById('message1');
    const preUpdate = document.getElementById('numberTroph1');
    const postUpdate = document.getElementById('trophUpdate1');

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
      emoji.style.display = 'none';
      message.style.display = 'none';
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
      emoji.style.display = 'none';
      message.style.display = 'none';
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
      emoji.style.display = 'none';
      message.style.display = 'none';
    }
  }
  // Sets everything back to its default CSS style
  hideColor(option){
    const qContainer1 = document.getElementById('Q1answer1');
    const qResult1 = document.getElementById('Q1result1');
    const qContainer2 = document.getElementById('Q1answer2');
    const qResult2 = document.getElementById('Q1result2');
    const qHint2 = document.getElementById('Q1hint2');
    const qContainer3 = document.getElementById('Q1answer3');
    const qResult3 = document.getElementById('Q1result3');
    const qHint3 = document.getElementById('Q1hint3');
    const qContainer4 = document.getElementById('Q1answer4');
    const qResult4 = document.getElementById('Q1result4');
    const qHint4 = document.getElementById('Q1hint4');
    const nextB = document.getElementById('nextButton1');
    const emoji = document.getElementById('emoji1');
    const message = document.getElementById('message1');
    const preUpdate = document.getElementById('numberTroph1');
    const postUpdate = document.getElementById('trophUpdate1');

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
      preUpdate.style.display = 'block';
      postUpdate.style.display = 'none';
    }
    else{
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
      preUpdate.style.display = 'block';
      postUpdate.style.display = 'none';
    }
  }
  // Goes to the categories page
  goCat(){
    this.router.navigate(['folder/:id']);
  }
  // Goes to the next question
  nextPage(){
    this.router.navigate(['levelOnequestion2']);
  }
  ngOnInit() {
  }
}
