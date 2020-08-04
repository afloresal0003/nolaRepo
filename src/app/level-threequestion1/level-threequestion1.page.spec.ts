import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LevelThreequestion1Page } from './level-threequestion1.page';

describe('LevelThreequestion1Page', () => {
  let component: LevelThreequestion1Page;
  let fixture: ComponentFixture<LevelThreequestion1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelThreequestion1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelThreequestion1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
