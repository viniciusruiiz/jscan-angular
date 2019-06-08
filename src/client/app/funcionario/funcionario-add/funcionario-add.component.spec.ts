import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioAddComponent } from './funcionario-add.component';

describe('FuncionarioAddComponent', () => {
  let component: FuncionarioAddComponent;
  let fixture: ComponentFixture<FuncionarioAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
