import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorUpdateComponent } from './gestor-update.component';

describe('GestorUpdateComponent', () => {
  let component: GestorUpdateComponent;
  let fixture: ComponentFixture<GestorUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestorUpdateComponent]
    });
    fixture = TestBed.createComponent(GestorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
