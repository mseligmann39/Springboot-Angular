import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaCreateComponent } from './transferencia-create.component';

describe('TransferenciaCreateComponent', () => {
  let component: TransferenciaCreateComponent;
  let fixture: ComponentFixture<TransferenciaCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferenciaCreateComponent]
    });
    fixture = TestBed.createComponent(TransferenciaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
