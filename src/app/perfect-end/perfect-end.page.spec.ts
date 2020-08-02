import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfectEndPage } from './perfect-end.page';

describe('PerfectEndPage', () => {
  let component: PerfectEndPage;
  let fixture: ComponentFixture<PerfectEndPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfectEndPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfectEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
