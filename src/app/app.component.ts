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
    //window.open('https://www.myschoolmyrights.com/#knowrights');
   this.document.location.href = 'https://www.myschoolmyrights.com/#knowrights';
  }
  goToShop(){
    this.router.navigate(['faq']);
  }
  goToSurvey(){
    this.document.location.href ='https://docs.google.com/forms/d/e/1FAIpQLSdWJ_ZBV-vL6Rdb-p9YapvyM-wFPhk_HdNVJhUaXyPjv6krdw/viewform';

  }
  goToContact(){
    this.document.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScaesjVim_CHBsa0qVgPT7PsUQnEIiUssdGIb5-m8LvbB9PAQ/viewform';
  }
  changeLanguage(){
    this.router.navigate(['faq']);
  }
  goToProfile(){
    this.router.navigate(['faq']);
  }

  ngOnInit() {
    let path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
