import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeListComponent } from './mensaje-list.component';

describe('MensajeListComponent', () => {
  let component: MensajeListComponent;
  let fixture: ComponentFixture<MensajeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeListComponent]
    });
    fixture = TestBed.createComponent(MensajeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
