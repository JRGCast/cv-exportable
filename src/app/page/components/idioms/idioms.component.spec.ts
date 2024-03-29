import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomsComponent } from './idioms.component';

describe('IdiomsComponent', () => {
  let component: IdiomsComponent;
  let fixture: ComponentFixture<IdiomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IdiomsComponent]
    });
    fixture = TestBed.createComponent(IdiomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
