import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSecComponent } from './design-sec.component';

describe('DesignSecComponent', () => {
  let component: DesignSecComponent;
  let fixture: ComponentFixture<DesignSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignSecComponent]
    });
    fixture = TestBed.createComponent(DesignSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
