import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUrlComponent } from './photo-url.component';

describe('PhotoUrlComponent', () => {
  let component: PhotoUrlComponent;
  let fixture: ComponentFixture<PhotoUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
