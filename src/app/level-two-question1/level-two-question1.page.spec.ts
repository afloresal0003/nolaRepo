import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LevelTwoQuestion1Page } from './level-two-question1.page';

describe('LevelTwoQuestion1Page', () => {
  let component: LevelTwoQuestion1Page;
  let fixture: ComponentFixture<LevelTwoQuestion1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelTwoQuestion1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelTwoQuestion1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
