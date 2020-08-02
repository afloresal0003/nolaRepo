import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WellDoneEndPage } from './well-done-end.page';

describe('WellDoneEndPage', () => {
  let component: WellDoneEndPage;
  let fixture: ComponentFixture<WellDoneEndPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellDoneEndPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WellDoneEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
