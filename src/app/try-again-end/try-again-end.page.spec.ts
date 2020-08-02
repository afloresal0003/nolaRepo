import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TryAgainEndPage } from './try-again-end.page';

describe('TryAgainEndPage', () => {
  let component: TryAgainEndPage;
  let fixture: ComponentFixture<TryAgainEndPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryAgainEndPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TryAgainEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
