import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { APCSPPagePage } from './apcsppage.page';

describe('APCSPPagePage', () => {
  let component: APCSPPagePage;
  let fixture: ComponentFixture<APCSPPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APCSPPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(APCSPPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
