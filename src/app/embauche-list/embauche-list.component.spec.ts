import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbaucheListComponent } from './embauche-list.component';

describe('EmbaucheListComponent', () => {
  let component: EmbaucheListComponent;
  let fixture: ComponentFixture<EmbaucheListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbaucheListComponent]
    });
    fixture = TestBed.createComponent(EmbaucheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
