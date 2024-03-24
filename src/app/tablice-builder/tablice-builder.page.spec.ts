import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabliceBuilderPage } from './tablice-builder.page';

describe('TabliceBuilderPage', () => {
  let component: TabliceBuilderPage;
  let fixture: ComponentFixture<TabliceBuilderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabliceBuilderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
