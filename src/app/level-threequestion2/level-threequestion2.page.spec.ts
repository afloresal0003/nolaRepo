import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LevelThreequestion2Page } from './level-threequestion2.page';

describe('LevelThreequestion2Page', () => {
  let component: LevelThreequestion2Page;
  let fixture: ComponentFixture<LevelThreequestion2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelThreequestion2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelThreequestion2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
