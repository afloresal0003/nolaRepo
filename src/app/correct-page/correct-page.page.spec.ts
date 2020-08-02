import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectPagePage } from './correct-page.page';

describe('CorrectPagePage', () => {
  let component: CorrectPagePage;
  let fixture: ComponentFixture<CorrectPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
