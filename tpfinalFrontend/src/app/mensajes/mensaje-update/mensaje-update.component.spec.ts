import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeUpdateComponent } from './mensaje-update.component';

describe('MensajeUpdateComponent', () => {
  let component: MensajeUpdateComponent;
  let fixture: ComponentFixture<MensajeUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeUpdateComponent]
    });
    fixture = TestBed.createComponent(MensajeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
