import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WrongPagePage } from './wrong-page.page';

describe('WrongPagePage', () => {
  let component: WrongPagePage;
  let fixture: ComponentFixture<WrongPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WrongPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
