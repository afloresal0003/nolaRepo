import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LevelThreequestion5Page } from './level-threequestion5.page';

describe('LevelThreequestion5Page', () => {
  let component: LevelThreequestion5Page;
  let fixture: ComponentFixture<LevelThreequestion5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelThreequestion5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelThreequestion5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
