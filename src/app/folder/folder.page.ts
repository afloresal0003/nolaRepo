import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  navigateCategories(){
    this.router.navigate(['/categories-page']);
  }
  navigateROTD(){
    this.router.navigate(['/right-of-the-day']);
  }
  ngOnInit() {
    this.folder = 'NOLA';
  }

}
