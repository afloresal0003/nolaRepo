import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LevelsPagePage } from './levels-page.page';

describe('LevelsPagePage', () => {
  let component: LevelsPagePage;
  let fixture: ComponentFixture<LevelsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
