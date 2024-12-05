import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDefaultImageComponent } from './test-default-image.component';

describe('TestDefaultImageComponent', () => {
  let component: TestDefaultImageComponent;
  let fixture: ComponentFixture<TestDefaultImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDefaultImageComponent]
    });
    fixture = TestBed.createComponent(TestDefaultImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
