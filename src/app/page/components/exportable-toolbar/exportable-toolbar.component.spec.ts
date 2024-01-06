import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportableToolbarComponent } from './exportable-toolbar.component';

describe('ExportableToolbarComponent', () => {
  let component: ExportableToolbarComponent;
  let fixture: ComponentFixture<ExportableToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExportableToolbarComponent]
    });
    fixture = TestBed.createComponent(ExportableToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
