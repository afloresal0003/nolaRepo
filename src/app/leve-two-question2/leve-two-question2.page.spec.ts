import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeveTwoQuestion2Page } from './leve-two-question2.page';

describe('LeveTwoQuestion2Page', () => {
  let component: LeveTwoQuestion2Page;
  let fixture: ComponentFixture<LeveTwoQuestion2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeveTwoQuestion2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeveTwoQuestion2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
