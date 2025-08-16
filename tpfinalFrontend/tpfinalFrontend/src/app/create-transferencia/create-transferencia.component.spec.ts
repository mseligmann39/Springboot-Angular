import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransferenciaComponent } from './create-transferencia.component';

describe('CreateTransferenciaComponent', () => {
  let component: CreateTransferenciaComponent;
  let fixture: ComponentFixture<CreateTransferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTransferenciaComponent]
    });
    fixture = TestBed.createComponent(CreateTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
