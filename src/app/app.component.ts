import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Student Rights Database',
      url: '/levelOnequestion1/question1.module',
      icon: 'mail'
    },
    {
      title: 'FAQ',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Feedback Survey',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Contact',
      url: '/folder/Archived',
      icon: 'archive'
    },  
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  goToDatabase(){
    window.open('https://www.myschoolmyrights.com/#knowrights');
    // this.document.location.href = 'https://stackoverflow.com';
  }
  goToShop(){
    this.router.navigate(['faq']);
  }
  goToSurvey(){
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScd3kajMTRuAIPh7CNYmbb1IXJM7izwKP2dh96Mckm4xNpKag/viewform');

  }
  goToContact(){
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScaesjVim_CHBsa0qVgPT7PsUQnEIiUssdGIb5-m8LvbB9PAQ/viewform');
  }

  ngOnInit() {
    let path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
