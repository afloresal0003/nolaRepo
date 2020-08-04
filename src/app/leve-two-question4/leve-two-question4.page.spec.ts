import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeveTwoQuestion4Page } from './leve-two-question4.page';

describe('LeveTwoQuestion4Page', () => {
  let component: LeveTwoQuestion4Page;
  let fixture: ComponentFixture<LeveTwoQuestion4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeveTwoQuestion4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeveTwoQuestion4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
