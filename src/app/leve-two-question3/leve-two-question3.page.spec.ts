import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeveTwoQuestion3Page } from './leve-two-question3.page';

describe('LeveTwoQuestion3Page', () => {
  let component: LeveTwoQuestion3Page;
  let fixture: ComponentFixture<LeveTwoQuestion3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeveTwoQuestion3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeveTwoQuestion3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
