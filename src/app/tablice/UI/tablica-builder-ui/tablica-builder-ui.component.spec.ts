import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablicaBuilderUIComponent } from './tablica-builder-ui.component';

describe('TablicaBuilderUIComponent', () => {
  let component: TablicaBuilderUIComponent;
  let fixture: ComponentFixture<TablicaBuilderUIComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablicaBuilderUIComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablicaBuilderUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
