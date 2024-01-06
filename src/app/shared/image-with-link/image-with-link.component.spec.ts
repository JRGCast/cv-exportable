import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithLinkComponent } from './image-with-link.component';

describe('ImageWithLinkComponent', () => {
  let component: ImageWithLinkComponent;
  let fixture: ComponentFixture<ImageWithLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImageWithLinkComponent]
    });
    fixture = TestBed.createComponent(ImageWithLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
