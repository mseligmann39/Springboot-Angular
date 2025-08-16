import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMensajeComponent } from './create-mensaje.component';

describe('CreateMensajeComponent', () => {
  let component: CreateMensajeComponent;
  let fixture: ComponentFixture<CreateMensajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMensajeComponent]
    });
    fixture = TestBed.createComponent(CreateMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
