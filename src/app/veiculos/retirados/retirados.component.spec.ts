import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiradosComponent } from './retirados.component';

describe('RetiradosComponent', () => {
  let component: RetiradosComponent;
  let fixture: ComponentFixture<RetiradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetiradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
