import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaUpdateComponent } from './transferencia-update.component';

describe('TransferenciaUpdateComponent', () => {
  let component: TransferenciaUpdateComponent;
  let fixture: ComponentFixture<TransferenciaUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferenciaUpdateComponent]
    });
    fixture = TestBed.createComponent(TransferenciaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
