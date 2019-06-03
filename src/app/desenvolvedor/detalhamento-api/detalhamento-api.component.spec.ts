import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoApiComponent } from './detalhamento-api.component';

describe('DetalhamentoApiComponent', () => {
  let component: DetalhamentoApiComponent;
  let fixture: ComponentFixture<DetalhamentoApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhamentoApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhamentoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
