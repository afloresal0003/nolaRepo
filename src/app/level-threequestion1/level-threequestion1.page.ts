import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-level-threequestion1',
  templateUrl: './level-threequestion1.page.html',
  styleUrls: ['./level-threequestion1.page.scss'],
})
export class LevelThreequestion1Page implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  showColor(color){
    if (color === 'green'){
      let elem = document.getElementById('correct');
      let otherE = document.getElementById('Qcontainer1')
      let otherEE = document.getElementById('Qcontainer2')
      let otherEEE = document.getElementById('iconTroph')
      let otherEEEE = document.getElementById('centerThis')
      let otherEEEEE = document.getElementById('numberTroph')
      elem.style.display = 'block';
      otherE.style.display = 'none';
      otherEE.style.display = 'none';
      otherEEE.style.display = 'none';
      otherEEEE.style.display = 'none';
      otherEEEEE.style.display = 'none';
    }
    else{
      let elem = document.getElementById('wrong');
      elem.style.display = 'block';
      let otherE = document.getElementById('Qcontainer1')
      let otherEE = document.getElementById('Qcontainer2')
      let otherEEE = document.getElementById('iconTroph')
      let otherEEEE = document.getElementById('centerThis')
      let otherEEEEE = document.getElementById('numberTroph')
      otherE.style.display = 'none';
      otherEE.style.display = 'none';
      otherEEE.style.display = 'none';
      otherEEEE.style.display = 'none';
      otherEEEEE.style.display = 'none';
    }
  }
  hideColor(option){
    if (option ==='Continue'){
      let elem = document.getElementById('correct');
      let otherE = document.getElementById('Qcontainer1')
      let otherEE = document.getElementById('Qcontainer2')
      let otherEEE = document.getElementById('iconTroph')
      let otherEEEE = document.getElementById('centerThis')
      let otherEEEEE = document.getElementById('numberTroph')
      elem.style.display = 'none';
      otherE.style.display = 'block';
      otherEE.style.display = 'block';
      otherEEE.style.display = 'block';
      otherEEEE.style.display = 'block';
      otherEEEEE.style.display = 'block';
      this.router.navigate(['level-threequestion2']);
    }
    else{
      let elem = document.getElementById('wrong');
      let otherE = document.getElementById('Qcontainer1')
      let otherEE = document.getElementById('Qcontainer2')
      let otherEEE = document.getElementById('iconTroph')
      let otherEEEE = document.getElementById('centerThis')
      let otherEEEEE = document.getElementById('numberTroph')
      otherE.style.display = 'block';
      otherEE.style.display = 'block';
      otherEEE.style.display = 'block';
      otherEEEE.style.display = 'block';
      otherEEEEE.style.display = 'block';
      elem.style.display = 'none';
    }
  }
  ngOnInit() {
  }

}

