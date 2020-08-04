import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LevelThreequestion3Page } from './level-threequestion3.page';

describe('LevelThreequestion3Page', () => {
  let component: LevelThreequestion3Page;
  let fixture: ComponentFixture<LevelThreequestion3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelThreequestion3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelThreequestion3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
