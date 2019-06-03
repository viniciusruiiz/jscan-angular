import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarApiComponent } from './cadastrar-api.component';

describe('CadastrarApiComponent', () => {
  let component: CadastrarApiComponent;
  let fixture: ComponentFixture<CadastrarApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
