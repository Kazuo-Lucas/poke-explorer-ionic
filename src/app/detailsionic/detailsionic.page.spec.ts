import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsPage } from './detailsionic.page';

describe('DetailsionicPage', () => {
  let component: DetailsPage;
  let fixture: ComponentFixture<DetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
