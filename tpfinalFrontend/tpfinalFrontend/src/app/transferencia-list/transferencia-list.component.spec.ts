import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaListComponent } from './transferencia-list.component';

describe('TransferenciaListComponent', () => {
  let component: TransferenciaListComponent;
  let fixture: ComponentFixture<TransferenciaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferenciaListComponent]
    });
    fixture = TestBed.createComponent(TransferenciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
