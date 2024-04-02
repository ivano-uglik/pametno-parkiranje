import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatesPage } from './plates.page';

describe('PlatesPage', () => {
  let component: PlatesPage;
  let fixture: ComponentFixture<PlatesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
