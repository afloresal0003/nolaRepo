import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LevelThreequestion4Page } from './level-threequestion4.page';

describe('LevelThreequestion4Page', () => {
  let component: LevelThreequestion4Page;
  let fixture: ComponentFixture<LevelThreequestion4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelThreequestion4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelThreequestion4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
