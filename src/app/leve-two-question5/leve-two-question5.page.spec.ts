import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeveTwoQuestion5Page } from './leve-two-question5.page';

describe('LeveTwoQuestion5Page', () => {
  let component: LeveTwoQuestion5Page;
  let fixture: ComponentFixture<LeveTwoQuestion5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeveTwoQuestion5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeveTwoQuestion5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
