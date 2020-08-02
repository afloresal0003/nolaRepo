import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriesPagePage } from './categories-page.page';

describe('CategoriesPagePage', () => {
  let component: CategoriesPagePage;
  let fixture: ComponentFixture<CategoriesPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
