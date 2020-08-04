import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LevelTwoquestion5Page } from './level-twoquestion5.page';

describe('LevelTwoquestion5Page', () => {
  let component: LevelTwoquestion5Page;
  let fixture: ComponentFixture<LevelTwoquestion5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelTwoquestion5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelTwoquestion5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
